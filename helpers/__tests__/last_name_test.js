jest.dontMock('../last_name');

var lastNameFunc = require('../last_name');

describe("last_name", function() {
    it("should handle bad context without default", function() {
        var context = null;
        var localLastNameFunc = lastNameFunc.bind(context);
        var retVal;

        expect(function(){
            retVal = lastNameFunc();
        }).not.toThrow();

        expect(retVal).toBeFalsy();
    });

    it("should handle bad context and input", function() {
        var context = null;
        var localLastNameFunc = lastNameFunc.bind(context);
        var retVal;

        expect(function(){
            retVal = localLastNameFunc('test');
        }).not.toThrow();

        expect(retVal).toBe('test');
    });

    it("should return first name from user.name", function() {
        var context = {
            user: {
                name: 'Nima Gardideh'
            }
        };

        var localLastNameFunc = lastNameFunc.bind(context);
        var retVal = localLastNameFunc('test');

        expect(retVal).toBe('Gardideh');
    });

    it("should return last name if user.name has a middle name", function() {
        var context = {
            user: {
                name: 'Nima Halfmoon Gardideh'
            }
        };

        var localLastNameFunc = lastNameFunc.bind(context);
        var retVal = localLastNameFunc('test');

        expect(retVal).toBe('Gardideh');
    });    

    it("should return user.last_name if it exists", function() {
        var context = {
            user: {
                first_name: 'Nima',
                last_name: 'Gardideh'
            }
        };

        var localLastNameFunc = lastNameFunc.bind(context);
        var retVal = localLastNameFunc('test');

        expect(retVal).toBe('Gardideh');
    });


    it("should return defaultValue if user.name and user.last_name dont't exist", function() {
        var context = {
            user: {}
        };

        var localLastNameFunc = lastNameFunc.bind(context);
        var retVal = localLastNameFunc('default');

        expect(retVal).toBe('default');
    });
});
