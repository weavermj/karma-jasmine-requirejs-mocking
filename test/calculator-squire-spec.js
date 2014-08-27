define([
    'Squire',
], function (Squire) {

    var injector = new Squire();

    injector.mock('src/math', {
        addNumbers: function (a, b) {
            return a - b;
        }
    });

    describe('testing with the mock math library in the calculator', function () {

        it('should add numbers together using the mock Math library', function (done) {
            injector.require(['src/calculator'], function(Calculator) {
                expect(Calculator.add(1,2)).toBe(-1);
                done();
            });
        });

    });

    describe('testing with the real math library in the calculator', function () {

        it('should add numbers together using the mock Math library', function (done) {
            require(['src/calculator'], function(Calculator) {
                expect(Calculator.add(1,2)).toBe(3);
                done();
            });
        });

    });

});