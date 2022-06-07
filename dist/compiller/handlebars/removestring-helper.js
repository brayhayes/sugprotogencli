"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars_1 = require("handlebars");
handlebars_1.registerHelper('removeString', function (field, findString, replaceWith) {
    return field.replace(findString, replaceWith);
});
