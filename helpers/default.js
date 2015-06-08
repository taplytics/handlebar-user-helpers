module.exports = function(val, defaultVal) {
    return (val !== null && val !== undefined) ? val : defaultVal;
};
