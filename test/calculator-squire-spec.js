define([
    'Squire',
], function (Squire) {

    var injector = new Squire();

    var mathMock = {
            addNumbers: function (a, b) {
                return a - b;
            }
        };

    describe('testing with the mock math library in the calculator', function () {

        beforeEach(function () {
            // set the mock to the mathMock
            injector.mock('src/math', mathMock);
        });

        afterEach(function(){
            injector.clean('src/math');
        });

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

        // here we want to override the addNumbers behaviour to actually subtracts numbers,
        // but keep the existing multiplyNumbers behaviour

        var fakeMath,
            injector;

        beforeEach(function (done) {
            // require the real math module
            require(['src/math'], function(Math) {
                // extend the math module with the math mock
                // any existing functions are overwritten
                fakeMath = $.extend(true, {}, Math, mathMock);
                injector = new Squire();

                // set the fakeMath module as the math mock
                injector.mock('src/math', fakeMath);
                done();
            });

        });

        afterEach(function(){
            injector.clean('src/math');
        });

        it('should multiply numbers together using the real Math library function', function (done) {
            injector.require(['src/calculator'], function(Calculator) {
                expect(Calculator.times(9,9)).toBe(81);
                done();
            });
        });

        it('should add numbers together using the mock Math library function', function (done) {
            injector.require(['src/calculator'], function(Calculator) {
                expect(Calculator.add(1,2)).toBe(-1);
                done();
            });
        });

    });

});