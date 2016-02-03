// Requires
var fs = require('fs'),
	api = require('./api')

// Tasky command line tasks, compose from tasky implementation API
var commands = {};

commands.dbFile = 'tasky.json';

commands.init = function() {
	fs.writeFileSync('.tasky_config.json', JSON.stringify({
		index: 1
	}));
};

commands.add = function(user_arguments) {
	console.log('commands.add')
};

commands.list = function() {
	console.log('commands.list')
};

module.exports = commands;