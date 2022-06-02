"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    path: ['src/proto'],
    output: 'codegeneration',
    target: ['.proto'],
    ignore: ['node_modules', 'dist'],
    template: 'templates/nestjs-grpc.hbs',
    keepCase: false,
    comments: true,
    verbose: true
};
