// Requires
var fs = require('fs'),
	api = require('./api')

// Tasky command line tasks, compose from tasky implementation API
var commands = {};
commands.init = function() {
	fs.writeFileSync(api.config_file, JSON.stringify({
		index: 0
	}));
	fs.writeFileSync(api.db_file, JSON.stringify({tasks: []}));
	console.log('tasky init ran successfully...\n','.tasky.json created\n','.tasky_config.json created!\n');
};
commands.add = function(user_arguments) {
	var new_task = {
		description : user_arguments.join(' '),
		index : (api.getIndex()) + 1,
		completed : false
	}
	var tasks = api.getTasks();
	tasks.push(new_task);
	api.writeTasks(tasks);
	api.incrementIndex();
	this.list();
};
commands.complete = function(id) {
	var tasks = api.getTasks(),
		id = JSON.parse(id);

	if (api.hasTask(id)) {
		tasks.forEach(function(task) {
			if (task.index === id) {
				task.completed = !task.completed;
			}
		});
		api.writeTasks(tasks);
		this.list();
	} else {
		console.log('could not find task with id of: ', id);
	}

}
commands.show = function(filter) {
	var task;

	//take advantage of == coercion to see if string of # is equal to integer of string, if so we know it's an id
	if (filter[0] == parseInt(filter[0],10) ) {
		if (api.hasTask(parseInt(filter[0],10))) {
			task = api.getTask(parseInt(filter[0],10));
			printTasks(task);
		} else {
			console.log('could not find task with id of: ', filter[0]);
		}
	} else {
		if (filter[0] === 'completed' || filter[0] === 'complete') {
			printTasks(api.getTasksByStatus(true))
		} else if (filter[0] == 'incomplete') {
			printTasks(api.getTasksByStatus(false));
		} else if (filter[0] == undefined) {
			printTasks(api.getTasks());
		}
		else {
			console.log("can't display tasks that by " + filter[0] + " status");
		}
	}

}
commands.help = function() {
	console.log(
		' Tasky is a command line app to create tasks for a folder quickly\n',
		'Available commands:\n',
		'\t \'tasky init\' --- creates .tasky_config.json and tasky.json, required before other tasks can run\n',
		'\t \'tasky list\' --- lists all tasks\n',
		'\t \'tasky add \'task description \' --- adds a task, quotes not required\n',
		'\t \'tasky complete \'numerical id of task \' --- toggles the completetion status of a task\n',
		''
	);
}
module.exports = commands;

// Private functions
function printTasks(tasks) {
	tasks.forEach(function(task) {
		console.log('id: ' + task.index + '\t --- ' + task.description + ' --- ' + (task.completed ? 'complete' : 'incomplete' ));
	})
	return false;
}