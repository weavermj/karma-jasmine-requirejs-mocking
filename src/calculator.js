define('src/calculator', ['src/math'], function (Math) {
    return {
        add: function (a,b) {
            return Math.addNumbers(a,b);
        },
        times: function (a,b) {
            return Math.multiplyNumbers(a,b);
        }
    };
});