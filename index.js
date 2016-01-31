#! /usr/bin/env node

// Requires
var exec = require('child_process').exec,
	fs = require('fs');

// User arguments
var cli_arguments = process.argv.slice(2),
	user_command = cli_arguments[0],
	user_arguments = cli_arguments.slice(3);

switch(user_command) {
	case 'add':
		tasky_add(user_arguments);
		break;
	case 'list':
		tasky_list(user_arguments);
		break;
	default:
		tasky_list(user_arguments);
}

// Tasky Implementation
function tasky_add() {
	console.log('add')
};

function tasky_list() {
	console.log('list')
};