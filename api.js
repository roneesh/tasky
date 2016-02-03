// Requires
var fs = require('fs'),
	commands = require('./commands');

// Tasky Implementation API - do core tasky tasks like manage index of tasks, append and read from files, etc, it mostly interacts with .tasky_config.json
var api = {};

api.config_file = '.tasky_config.json';
api.db_file = '.tasky.json';


api.getIndex = function() {
	return JSON.parse(fs.readFileSync(this.config_file, "utf8")).index;
}

api.incrementIndex = function() {
	var current_index = this.getIndex(),
		new_config = { 'index': current_index + 1 }
	fs.writeFileSync(this.config_file, JSON.stringify(new_config));
}

api.getTasks = function() {
	return JSON.parse(fs.readFileSync(api.db_file, 'utf-8')).tasks;
}

api.getTask = function(id) {
	var tasks = this.getTasks(),
		single_task;
	tasks.forEach(function(task) {
		if (task.index === id) {
			single_task = task;
		}
	});
	return [single_task]; //returns an array to match getTasks, which also returns an array
}

api.getTasksByStatus = function(status) {
	var tasks = this.getTasks(),
		tasksByStatus = [];
	tasks.forEach(function(task) {
		if (task.completed === status) {
			tasksByStatus.push(task);
		}
	});
	return tasksByStatus;
}

api.hasTask = function(id) {
	var tasks = this.getTasks(),
		does_task_exist = false;
	tasks.forEach(function(task) {
		if (task.index === id) {
			does_task_exist = true;
		}
	})
	return does_task_exist;
}

api.writeTasks = function(tasks) {
	fs.writeFileSync(api.db_file, JSON.stringify({tasks: tasks}));
}

module.exports = api;