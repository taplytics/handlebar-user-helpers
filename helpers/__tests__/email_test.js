jest.dontMock('../email');

var emailFunc = require('../email');

describe("email", function() {
    it("should handle bad context", function() {
        var context = null;
        
        var localEmailFunc = emailFunc.bind(context);
        var retVal;

        expect(function(){
            retVal = localEmailFunc('test');
        }).not.toThrow();

        expect(retVal).toBe('test');
    });

    it("should return email", function() {
        var context = {
            user: {
                email: 'test@email.com'
            }
        };

        var localEmailFunc = emailFunc.bind(context);
        var retVal = localEmailFunc('test');

        expect(retVal).toBe('test@email.com');
    });

    it("should return defaultValue if email doesn't exist", function() {
        var context = {
            user: {}
        };

        var localEmailFunc = emailFunc.bind(context);
        var retVal = localEmailFunc('default');

        expect(retVal).toBe('default');
    });
});
