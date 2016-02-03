// Requires
var fs = require('fs'),
	api = require('./api');

// Tasky command line tests, compose from tasky implementation API
var tests = {};

tests.getIndex = function() {
	console.log('get Index: ', api.getIndex());
}

tests.incrementIndex = function() {
	console.log('current Index: ', api.getIndex());
	console.log('incrementing...');
	api.incrementIndex();
	console.log('new Index: ', api.getIndex());
}

module.exports = tests;