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

tests.addTask = function() {
	var oldIndex = api.getIndex(),
		oldTasks = api.getTasks(),
		oldTasksCount = oldTasks.length;

	console.log('current Index: ', oldIndex);
	console.log('current Task count: ', oldTasks.length);
	
	console.log("adding task... 'a test task' ");
	oldTasks.push({
		description : 'a test task',
		index : (api.getIndex()) + 1,
		completed : true
	});
	api.writeTasks(oldTasks);
	api.incrementIndex();

	var newIndex = api.getIndex(),
		newTasks = api.getTasks();
	console.log('new Index: ', newIndex);
	console.log('new Task count: ', newTasks.length);
}

module.exports = tests;