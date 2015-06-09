var _ = require('lodash');

module.exports = function(defaultValue) {
    var val = null;
    
    if (this && this.user)
        val = this.user.email;

    if (_.isObject(defaultValue)) // we're getting `this` as the defaultValue since there was no input.
        defaultValue = null;

    return val ? val : defaultValue;
};
