import { IGenOptions } from './types';

export const options: IGenOptions = {
    path: ['src/proto'],
    output: 'codegeneration',
    target: ['.proto'],
    ignore: ['node_modules', 'dist'],
    template: 'templates/nestjs-grpc.hbs',  //todo add request and response and default to source, allow for pass in arg
    keepCase: false,
    comments: true,
    verbose: true
};
