#! /usr/bin/env node

// Requires and globals
var exec = require('child_process').exec,
	fs = require('fs');

var _DB_FILE_NAME = 'tasky.json',
	working_id = 0,
	base_taky_config = {
		index: 1,
		tasks: []
	}

// User arguments
var cli_arguments = process.argv.slice(2),
	user_command = cli_arguments[0],
	user_arguments = cli_arguments.slice(1);

switch(user_command) {
	case 'init':
		tasky_init();
		break;
	case 'add':
		tasky_add(user_arguments);
		break;
	case 'list':
		tasky_list(user_arguments);
		break;
	default:
		tasky_list(user_arguments);
}

// Tasky Implementation API - do core tasky tasks like manage index of tasks, append and read from files, etc
var tasky = {
    getIndex: function() {
    	fs.readFile('.tasky_config.json', "utf8", function(err, data) {
	        if (err) throw err;
	        return JSON.parse(data).index;
	    });
    },
    incrementIndex: function() {
    	fs.readFile('.tasky_config.json', "utf8", function(err, data) {
	        if (err) throw err;
	        return JSON.parse(data).index +
	    });
    }
};



// Tasky command line tasks, compose from tasky implementation API
function tasky_init() {
	fs.writeFileSync('.tasky_config.json', JSON.stringify(base_taky_config));
}

function tasky_add(user_arguments) {
	var current_index;
	fs.readFile('.tasky_config.json', "utf8", function(err, data) {
        if (err) throw err;
        current_index = JSON.parse(data).index;
    });

	fs.writeFileSync(_DB_FILE_NAME, JSON.stringify({
		id: current_index + 1,
		task: user_arguments,
		completed: false,
		tags: []
	}));
};

function tasky_list() {
	console.log('list')
};