module.exports = function(defaultValue) {
    var val = null;
    
    if (this && this.user)
        val = this.user.email;

    return val ? val : defaultValue;
};
