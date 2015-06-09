jest.autoMockOff();

var indexFunc = require('../index');
var _ = require('lodash');

var helpers = [
    'default',
    'first_name',
    'last_name',
    'email',
    'name'
];

describe("index", function() {
    var Handlebars = {};

    it("should register all helpers", function() {
        var calledHelpers = [];
        var mockFunc = jest.genMockFunction();

        Handlebars.registerHelper = mockFunc.mockImplementation(function(name, helperFunc) {
            calledHelpers.push(name);

            // var helper = require('../helpers/' + name);
            // expect(helperFunc).toBe(helper);
        });

        indexFunc(Handlebars);

        expect(_.remove(calledHelpers, helpers).length).toBe(0);

    });
});
