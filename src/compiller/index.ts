import { common, Enum, Root, util } from 'protobufjs';
import { basename, dirname, extname, isAbsolute, join, resolve } from 'path';
import { existsSync, lstatSync, outputFileSync, readdirSync, readFileSync } from 'fs-extra';
import { compile } from 'handlebars';
import * as chalk from 'chalk';

import './handlebars/var-helper';
import './handlebars/comment-helper';
import './handlebars/enum-comment-helper';
import './handlebars/uncapitalize-hepler';
import './handlebars/type-helper';
import './handlebars/default-value-helper';
import './handlebars/removestring-helper';

import { IGenOptions } from '../types';

/** Set Compiller */
export class Compiller {
    constructor(private readonly options: IGenOptions) {}

    public compile(): void {
        this.options.path.forEach((pkg) => {
            if (this.options.path.length === 1) {
                this.getProtoFiles(pkg);
            }
        });
    }

    private resolveRootPath(root: Root): void {
        const paths = this.options.path;
        const length = paths.length;

        // Search include paths when resolving imports
        root.resolvePath = (origin, target) => {
            let resolved = util.path.resolve(util.path.normalize(origin), util.path.normalize(target), false);

            const idx = resolved.lastIndexOf('google/protobuf/');

            if (idx > -1) {
                const altname = resolved.substring(idx);

                if (resolved.match(/google\/protobuf\//g).length > 1) {
                    resolved = resolved.split('google/protobuf')[0] + util.path.normalize(target);
                }

                if (altname in common) {
                    resolved = altname;
                }
            }

            if (existsSync(resolved)) {
                return resolved;
            }

            for (let i = 0; i < length; ++i) {
                const iresolved = util.path.resolve(paths[i] + '/', target);

                if (existsSync(iresolved)) {
                    return iresolved;
                }
            }

            return resolved;
        };
    }

    private walkTree(item: Root | any): void {
        if (item.nested) {
            Object.keys(item.nested).forEach((key) => {
                this.walkTree(item.nested[key]);
            });
        }

        if (item.fields) {
            Object.keys(item.fields).forEach((key) => {
                const field = item.fields[key];

                if (field.resolvedType) {
                    // Record the field's parent name
                    if (field.resolvedType.parent) {
                        // Abuse the options object!
                        if (!field.options) {
                            field.options = {};
                        }

                        if (field.type.indexOf('.') === -1) {
                            field.options.parent = field.resolvedType.parent.name;
                        }
                    }

                    // Record if the field is an enum
                    if (field.resolvedType instanceof Enum) {
                        // Abuse the options object!
                        if (!field.options) {
                            field.options = {};
                        }

                        field.options.enum = true;
                    }
                }
            });
        }
    }

    private output(file: string, pkg: string): void {
        const root = new Root();

        this.resolveRootPath(root);

        root.loadSync(file, {
            keepCase: this.options.keepCase,
            alternateCommentMode: this.options.comments
        }).resolveAll();

        this.walkTree(root);

        // const results = compile(tmpl)(root);
        // const outputFile = this.options.output ? join(this.options.output, file.replace(/^.+?[/\\]/, '')) : file;
        // const outputPath = join(dirname(outputFile), `${basename(file, extname(file))}.ts`);

        // outputFileSync(outputPath, results, 'utf8');

        if (root.nested) {
            //todo make dynamic

            const generalTemplate = readFileSync(resolve(__dirname, '../..', "templates/nestjs-grpc.hbs"), 'utf8');
            const requestTemplate = readFileSync(resolve(__dirname, '../..', "templates/request-class-dto.hbs"), 'utf8');
            const responseTemplate = readFileSync(resolve(__dirname, '../..', "templates/response-class-dto.hbs"), 'utf8');
            const controlleTemplate = readFileSync(resolve(__dirname, '../..', "templates/controller-class.hbs"), 'utf8');
            let hasCreatedController: boolean;
            Object.keys(root.nested).forEach((key) => {
                const newRoot: any = root.nested[key];
                const a = newRoot._nestedArray;
                a.forEach(element => {
                    let outputFolder = this.options.output;
                    let tmpl = generalTemplate;

                    if (element.name.includes("Request")) {
                        outputFolder += '/request';
                        tmpl = requestTemplate;
                    }
                    else if (element.name.includes("Response")) {
                        outputFolder += '/response';
                        tmpl = responseTemplate;
                    }
                    
                    file = element.name + '.ts';

                    const newOne = { nested: {[element.name]:  element }};
                    const results = compile(tmpl)(newOne);
                    const outputFile = outputFolder ? join(outputFolder, file.replace(/^.+?[/\\]/, '')) : file;
                    const outputPath = join(dirname(outputFile), `${basename(file, extname(file))}.ts`);
            
                    outputFileSync(outputPath, results, 'utf8');   
                    
                    if (element.name.includes("service")) {
                        outputFolder += '/controller';
                        tmpl = responseTemplate;
                    
                    
                    file = element.name + 'Controller.ts';

                    const newOne = { nested: {[element.name]:  element }};
                    const results = compile(controlleTemplate)(newOne);
                    const outputFile = outputFolder ? join(outputFolder, file.replace(/^.+?[/\\]/, '')) : file;
                    const outputPath = join(dirname(outputFile), `${basename(file, extname(file))}.ts`);
            
                    outputFileSync(outputPath, results, 'utf8');
                    } 
                });
            });
        }

        // const results = compile(tmpl)(root);
        // const outputFile = this.options.output ? join(this.options.output, file.replace(/^.+?[/\\]/, '')) : file;
        // const outputPath = join(dirname(outputFile), `${basename(file, extname(file))}.ts`);

        // outputFileSync(outputPath, results, 'utf8');
    }

    private generate(path: string, pkg: string): void {
        // todo make the templates args to be passed in to override default source ones
        
        let hbTemplate = resolve(__dirname, '../..', this.options.template);

        //If absolute path we will know have custom template option
        if (isAbsolute(path)) {
            hbTemplate = path;
        }

        if (!existsSync(hbTemplate)) {
            throw new Error(`Template ${hbTemplate} is not found`);
        }

        //const tmpl = readFileSync(hbTemplate, 'utf8');

        if (this.options.verbose) {
            console.log(chalk.blueBright(`-- found: `) + chalk.gray(path));
        }

        this.output(path, pkg);
    }

    private getProtoFiles(pkg: string): void {
        if (!existsSync(pkg)) {
            throw new Error(`Directory ${pkg} is not exist`);
        }

        const files = readdirSync(pkg);

        for (let i = 0; i < files.length; i++) {
            const filename = join(pkg, files[i]);
            const stat = lstatSync(filename);

            if (filename.indexOf(this.options.ignore.join()) > -1) {
                continue;
            }

            if (stat.isDirectory()) {
                this.getProtoFiles(filename);
            } else if (filename.indexOf(this.options.target.join()) > -1) {
                this.generate(filename, pkg);
            }
        }
    }
}
