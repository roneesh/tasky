// Requires
var fs = require('fs'),
	api = require('./api')

// Tasky command line tasks, compose from tasky implementation API
var commands = {};

commands.db_file = 'tasky.json';

commands.init = function() {
	fs.writeFileSync(api.config_file, JSON.stringify({
		index: 0
	}));
	fs.writeFileSync(commands.db_file, JSON.stringify({tasks: []}));
};

commands.add = function(user_arguments) {
	var new_task = {
		description : user_arguments.join(' '),
		index : (api.getIndex()) + 1,
		completed : false
	}
	tasks = JSON.parse(fs.readFileSync(commands.db_file, 'utf-8')).tasks;
	tasks.push(new_task);
	fs.writeFileSync(commands.db_file, JSON.stringify({tasks: tasks}));
	api.incrementIndex();
	this.list();
};

commands.list = function() {
	var json = JSON.parse(fs.readFileSync(commands.db_file, 'utf-8')).tasks;
	json.forEach(function(task) {
		console.log('id: ' + task.index + '\t --- ' + task.description + ' --- ' + (task.completed ? 'complete' : 'incomplete' ));
	})
};

commands.complete = function(id) {
	console.log('complete task of id: ', id);
}

commands.show = function(filter) {
	console.log('showing task(s) that are: ', filter);
	//complete will show done tasks
	//incomplete will show not done tasks
	//id will show single task
	//range will show a few tasks
}

module.exports = commands;