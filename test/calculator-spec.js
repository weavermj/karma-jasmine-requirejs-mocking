define([
    'mocker',
    'src/calculator'
], function (Mocker, Calculator) {

    var MathMock1 = {
        'src/math': {
            addNumbers: function (a,b) {
                return a - b;
            },
            multiplyNumbers: function (a,b) {
                return a * b;
            }
         }
    };

    var MathMock2 = {
        'src/math': {
            multiplyNumbers: function (a,b) {
                return a * b;
            }
         }
    };

    describe('Calculator', function () {

        beforeEach(function () {});

        afterEach(function () {});

        it('should add numbers together using the real Math library', function () {
            expect(Calculator.add(1,2)).toBe(3);
        });

        it('should add numbers together using the mock Math library', function (done) {
            var context = Mocker(MathMock1);
            context(['src/calculator'], function (Calculator) {
                expect(Calculator.add(1,2)).toBe(-1);
                done();
            });
        });

        it('should access the new mock multiplyNumbers method', function (done) {
            var context = Mocker(MathMock1);
            context(['src/math'], function (Math) {
                expect(Math.multiplyNumbers(4,5)).toBe(20);
                done();
            });
        });

        it('should not merge mocks together', function (done) {
            var context = Mocker(MathMock2);
            context(['src/math'], function (Math) {
                expect(Math.addNumbers).toBeUndefined();
                expect(typeof Math.multiplyNumbers).toBe('function');
                done();
            });
        });

    });
});