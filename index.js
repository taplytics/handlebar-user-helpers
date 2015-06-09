var _ = require('lodash');
var path = require('path');

var helpers = {};

helpers.default     = require('./helpers/default');
helpers.first_name  = require('./helpers/first_name');
helpers.last_name   = require('./helpers/last_name');
helpers.email       = require('./helpers/email');
helpers.name        = require('./helpers/name');

module.exports = function (Handlebars) {
    _.each(_.keys(helpers), function(helperName) {
        var helperFunc = helpers[helperName];
        Handlebars.registerHelper(helperName, helperFunc);
    });
};
