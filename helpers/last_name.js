var _ = require('lodash');

module.exports = function(defaultValue) {
    var val = null;
    
    if (this && this.user) {
        if (this.user.last_name)
            val = this.user.last_name;
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
    
    if (parts && parts.length)
        return parts.pop();
    
    return null;
}
