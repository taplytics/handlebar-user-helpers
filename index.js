var _ = require('lodash');
var path = require('path');

var helperNames = [
    'default',
    'first_name',
    'last_name',
    'email',
    'name'
];

var helpers = {};

_.each(helperNames, function(helperName) {
	var helperPath = path.join(__dirname, 'helpers', helperName);
	helpers[helperName] = require(helperPath);
});

module.exports = function (Handlebars) {
    _.each(helperNames, function(helperName) {
        var helperFunc = helpers[helperName];

        Handlebars.registerHelper(helperName, helperFunc);
    });
};
