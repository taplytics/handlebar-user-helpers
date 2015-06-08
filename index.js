var _ = require('lodash');


var helpers = [
    'default',
    'first_name',
    'last_name',
    'email',
    'name'
];

module.exports = function (Handlebars) {
    _.each(helpers, function(helperName) {
        var helperFunc = require('./helpers/' + helperName);

        Handlebars.registerHelper(helperName, helperFunc);
    });
};
