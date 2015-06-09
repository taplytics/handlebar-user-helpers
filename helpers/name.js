var _ = require('lodash');

module.exports = function(defaultValue) {
    var val = null;
    
    if (this && this.user) {
        if (this.user.name)
            val = this.user.name;
        else if (this.user.first_name || this.user.last_name)
            val = getFullName(this.user.first_name, this.user.last_name);
    }
    
    if (_.isObject(defaultValue)) // we're getting `this` as the defaultValue since there was no input.
        defaultValue = null;

    return val ? val : defaultValue;
};


function getFullName(first_name, last_name) {
    var name = "";

    if (first_name)
        name = first_name;

    if (last_name)
        name += name.length ? ' ' + last_name : last_name;

    return name.length ? name : null;
}