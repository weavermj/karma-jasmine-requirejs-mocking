karma-jasmine-requirejs-mocking
===============================

> Example of mocking with requirejs dependencies being mocked and ran in karma with jasmine

## Background
This basic templat setup contains a Calculator module and a Math module. `calc.js` acts as a proxy to mathematical operations that are defined in `math.js`.

Karma is configured using the RequireJs and Jasmine 2 frameworks. 

There are 2 types of mocks used:

* Mocker - creates a custom requirejs context for simple mocks
* SquireJS - uses the `squire.js` library to inject custom mocks into modules that have other dependancies

## Installation
Install dependancies with `npm install`.

## Running the tests

To start karma, execute `./node_modules/karma/bin/karma start`
