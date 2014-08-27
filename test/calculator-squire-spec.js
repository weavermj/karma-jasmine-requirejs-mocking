define([
    'Squire',
], function (Squire) {

    var injector = new Squire();

    var mathMock = {
        addNumbers: function (a, b) {
            return a - b;
        }
    };

    injector.mock('src/math', mathMock);

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

    describe('testing with a combination of the real and mock math library in the calculator', function () {

        it('should add numbers together using the mock Math library', function (done) {
             injector.require(['src/calculator'], function(Calculator) {
                expect(Calculator.add(1,2)).toBe(-1);
                done();
            });
        });

        it('should multiply numbers together using the real Math library', function (done) {

            var fakeMath;

            require(['src/math'], function(Math) {
                fakeMath = $.extend(true, {}, Math, mathMock);

                var injector2 = new Squire();
                injector2.mock('src/math', fakeMath);

                injector2.require(['src/calculator'], function(Calculator) {
                    expect(Calculator.add(9,3)).toBe(6);
                    expect(Calculator.times(9,9)).toBe(81);
                    done();
                });
            });

        });

    });

});