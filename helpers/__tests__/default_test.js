jest.dontMock('../default');

var defaultFunc = require('../default');

describe("default", function() {
    it("should handle bad input gracefully", function() {
        var retVal;

        expect(function() {
            retVal = defaultFunc();
        }).not.toThrow();

        expect(retVal).toBeFalsy();
    });

    it("should return value if it exists", function() {
        var retVal = defaultFunc('value', 'default');

        expect(retVal).toBe('value');
    });

    it("should return defaultValue if value doesn't exist", function() {
        var retVal = defaultFunc(null, 'default');

        expect(retVal).toBe('default');
    });
});
