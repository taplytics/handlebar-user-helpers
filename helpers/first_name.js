var _ = require('lodash');

module.exports = function(defaultValue) {
    var val = null;
    
    if (this && this.user) {
        if (this.user.first_name)
            val = this.user.first_name;
        else
            val = getFirstName(this.user.name);
    }

    if (_.isObject(defaultValue)) // we're getting `this` as the defaultValue since there was no input.
        defaultValue = null;

    return val ? val : defaultValue;
};

function getFirstName(name) {
    if (!name)
        return null;

    var parts = name.split(" ");
    
    return (parts && parts.length) ? parts[0] : null;
}
