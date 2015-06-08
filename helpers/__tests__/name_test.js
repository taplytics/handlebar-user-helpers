jest.dontMock('../name');

var nameFunc = require('../name');

describe("name", function() {
    it("should handle bad context without default", function() {
        var context = null;
        var localNameFunc = nameFunc.bind(context);
        var retVal;

        expect(function(){
            retVal = localNameFunc();
        }).not.toThrow();

        expect(retVal).toBeFalsy();
    });

    it("should handle bad context and input", function() {
        var context = null;
        var localNameFunc = nameFunc.bind(context);
        var retVal;

        expect(function(){
            retVal = localNameFunc('test');
        }).not.toThrow();

        expect(retVal).toBe('test');
    });

    it("should return full name from user.name", function() {
        var context = {
            user: {
                name: 'Nima Gardideh'
            }
        };

        var localNameFunc = nameFunc.bind(context);
        var retVal = localNameFunc('test');

        expect(retVal).toBe('Nima Gardideh');
    });

    it("should return user.first_name + user.last_name if they exists", function() {
        var context = {
            user: {
                first_name: 'Nima',
                last_name: 'Gardideh'
            }
        };

        var localNameFunc = nameFunc.bind(context);
        var retVal = localNameFunc('test');

        expect(retVal).toBe('Nima Gardideh');
    });

    it("should return user.first_name even if user.last_name doesn't exist", function() {
        var context = {
            user: {
                first_name: 'Nima'
            }
        };

        var localNameFunc = nameFunc.bind(context);
        var retVal = localNameFunc('test');

        expect(retVal).toBe('Nima');
    });

    it("should return user.last_name even if user.first_name doesn't exist", function() {
        var context = {
            user: {
                last_name: 'Gardideh'
            }
        };

        var localNameFunc = nameFunc.bind(context);
        var retVal = localNameFunc('test');

        expect(retVal).toBe('Gardideh');

    });

    it("should return defaultValue if user.name, user.first_name and user.last_name don't exist", function() {
        var context = {
            user: {}
        };

        var localNameFunc = nameFunc.bind(context);
        var retVal = localNameFunc('default');

        expect(retVal).toBe('default');
    });
});
