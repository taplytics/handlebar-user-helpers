jest.dontMock('../first_name');

var firstNameFunc = require('../first_name');

describe("first_name", function() {
    it("should handle bad context without default", function() {
        var context = null;
        var localFirstNameFunc = firstNameFunc.bind(context);
        var retVal;

        expect(function(){
            retVal = firstNameFunc();
        }).not.toThrow();

        expect(retVal).toBeFalsy();
    });

    it("should handle bad context and input", function() {
        var context = null;
        var localFirstNameFunc = firstNameFunc.bind(context);
        var retVal;

        expect(function(){
            retVal = localFirstNameFunc('test');
        }).not.toThrow();

        expect(retVal).toBe('test');
    });

    it("should return first name from user.name", function() {
        var context = {
            user: {
                name: 'Nima Gardideh'
            }
        };

        var localFirstNameFunc = firstNameFunc.bind(context);
        var retVal = localFirstNameFunc('test');

        expect(retVal).toBe('Nima');
    });

    it("should return user.first_name if it exists", function() {
        var context = {
            user: {
                first_name: 'Nima',
                last_name: 'Gardideh'
            }
        };

        var localFirstNameFunc = firstNameFunc.bind(context);
        var retVal = localFirstNameFunc('test');

        expect(retVal).toBe('Nima');
    });

    it("should return defaultValue if user.name and user.first_name dont't exist", function() {
        var context = {
            user: {}
        };

        var localFirstNameFunc = firstNameFunc.bind(context);
        var retVal = localFirstNameFunc('default');

        expect(retVal).toBe('default');
    });
});
