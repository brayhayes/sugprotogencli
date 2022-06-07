import { registerHelper } from 'handlebars';

registerHelper('removeString', function (field, findString, replaceWith) {
    return field.replace(findString, replaceWith);
});
