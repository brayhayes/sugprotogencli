"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiller = void 0;
const protobufjs_1 = require("protobufjs");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const handlebars_1 = require("handlebars");
const chalk = require("chalk");
require("./handlebars/var-helper");
require("./handlebars/comment-helper");
require("./handlebars/enum-comment-helper");
require("./handlebars/uncapitalize-hepler");
require("./handlebars/type-helper");
require("./handlebars/default-value-helper");
class Compiller {
    constructor(options) {
        this.options = options;
    }
    compile() {
        this.options.path.forEach((pkg) => {
            if (this.options.path.length === 1) {
                this.getProtoFiles(pkg);
            }
        });
    }
    resolveRootPath(root) {
        const paths = this.options.path;
        const length = paths.length;
        root.resolvePath = (origin, target) => {
            let resolved = protobufjs_1.util.path.resolve(protobufjs_1.util.path.normalize(origin), protobufjs_1.util.path.normalize(target), false);
            const idx = resolved.lastIndexOf('google/protobuf/');
            if (idx > -1) {
                const altname = resolved.substring(idx);
                if (resolved.match(/google\/protobuf\//g).length > 1) {
                    resolved = resolved.split('google/protobuf')[0] + protobufjs_1.util.path.normalize(target);
                }
                if (altname in protobufjs_1.common) {
                    resolved = altname;
                }
            }
            if (fs_extra_1.existsSync(resolved)) {
                return resolved;
            }
            for (let i = 0; i < length; ++i) {
                const iresolved = protobufjs_1.util.path.resolve(paths[i] + '/', target);
                if (fs_extra_1.existsSync(iresolved)) {
                    return iresolved;
                }
            }
            return resolved;
        };
    }
    walkTree(item) {
        if (item.nested) {
            Object.keys(item.nested).forEach((key) => {
                this.walkTree(item.nested[key]);
            });
        }
        if (item.fields) {
            Object.keys(item.fields).forEach((key) => {
                const field = item.fields[key];
                if (field.resolvedType) {
                    if (field.resolvedType.parent) {
                        if (!field.options) {
                            field.options = {};
                        }
                        if (field.type.indexOf('.') === -1) {
                            field.options.parent = field.resolvedType.parent.name;
                        }
                    }
                    if (field.resolvedType instanceof protobufjs_1.Enum) {
                        if (!field.options) {
                            field.options = {};
                        }
                        field.options.enum = true;
                    }
                }
            });
        }
    }
    output(file, pkg) {
        const root = new protobufjs_1.Root();
        this.resolveRootPath(root);
        root.loadSync(file, {
            keepCase: this.options.keepCase,
            alternateCommentMode: this.options.comments
        }).resolveAll();
        this.walkTree(root);
        if (root.nested) {
            const generalTemplate = fs_extra_1.readFileSync(path_1.resolve(__dirname, '../..', "templates/nestjs-grpc.hbs"), 'utf8');
            const requestTemplate = fs_extra_1.readFileSync(path_1.resolve(__dirname, '../..', "templates/request-class-dto.hbs"), 'utf8');
            const responseTemplate = fs_extra_1.readFileSync(path_1.resolve(__dirname, '../..', "templates/response-class-dto.hbs"), 'utf8');
            const controlleTemplate = fs_extra_1.readFileSync(path_1.resolve(__dirname, '../..', "templates/controller-class.hbs"), 'utf8');
            let hasCreatedController;
            Object.keys(root.nested).forEach((key) => {
                const newRoot = root.nested[key];
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
                    const newOne = { nested: { [element.name]: element } };
                    const results = handlebars_1.compile(tmpl)(newOne);
                    const outputFile = outputFolder ? path_1.join(outputFolder, file.replace(/^.+?[/\\]/, '')) : file;
                    const outputPath = path_1.join(path_1.dirname(outputFile), `${path_1.basename(file, path_1.extname(file))}.ts`);
                    fs_extra_1.outputFileSync(outputPath, results, 'utf8');
                    if (element.name.includes("service")) {
                        outputFolder += '/controller';
                        tmpl = responseTemplate;
                        file = element.name + 'Controller.ts';
                        const newOne = { nested: { [element.name]: element } };
                        const results = handlebars_1.compile(controlleTemplate)(newOne);
                        const outputFile = outputFolder ? path_1.join(outputFolder, file.replace(/^.+?[/\\]/, '')) : file;
                        const outputPath = path_1.join(path_1.dirname(outputFile), `${path_1.basename(file, path_1.extname(file))}.ts`);
                        fs_extra_1.outputFileSync(outputPath, results, 'utf8');
                    }
                });
            });
        }
    }
    generate(path, pkg) {
        let hbTemplate = path_1.resolve(__dirname, '../..', this.options.template);
        if (path_1.isAbsolute(path)) {
            hbTemplate = path;
        }
        if (!fs_extra_1.existsSync(hbTemplate)) {
            throw new Error(`Template ${hbTemplate} is not found`);
        }
        if (this.options.verbose) {
            console.log(chalk.blueBright(`-- found: `) + chalk.gray(path));
        }
        this.output(path, pkg);
    }
    getProtoFiles(pkg) {
        if (!fs_extra_1.existsSync(pkg)) {
            throw new Error(`Directory ${pkg} is not exist`);
        }
        const files = fs_extra_1.readdirSync(pkg);
        for (let i = 0; i < files.length; i++) {
            const filename = path_1.join(pkg, files[i]);
            const stat = fs_extra_1.lstatSync(filename);
            if (filename.indexOf(this.options.ignore.join()) > -1) {
                continue;
            }
            if (stat.isDirectory()) {
                this.getProtoFiles(filename);
            }
            else if (filename.indexOf(this.options.target.join()) > -1) {
                this.generate(filename, pkg);
            }
        }
    }
}
exports.Compiller = Compiller;
