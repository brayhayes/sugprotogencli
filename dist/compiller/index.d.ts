import './handlebars/var-helper';
import './handlebars/comment-helper';
import './handlebars/enum-comment-helper';
import './handlebars/uncapitalize-hepler';
import './handlebars/type-helper';
import './handlebars/default-value-helper';
import { IGenOptions } from '../types';
export declare class Compiller {
    private readonly options;
    constructor(options: IGenOptions);
    compile(): void;
    private resolveRootPath;
    private walkTree;
    private output;
    private generate;
    private getProtoFiles;
}
