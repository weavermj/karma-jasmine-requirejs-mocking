
require(['underscore'], function (underscore) {
});

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

require.config({
    baseUrl : '/base/',
    paths : {
        'mocker': 'lib/mocker',
        'underscore': 'lib/underscore',
        'Squire' : 'node_modules/squirejs/src/Squire'
    }
});

require(tests, window.__karma__.start);