#! /usr/bin/env node

// Requires
var	commands = require('./commands.js'),
	tests = require('./tests.js');

// User arguments
var cli_arguments = process.argv.slice(2),
	user_command = cli_arguments[0],
	user_arguments = cli_arguments.slice(1);

switch(user_command) {
	case 'init':
		commands.init();
		break;
	case 'add':
		commands.add(user_arguments);
		break;
	case 'list':
		commands.list();
		break;
	case 'test-getIndex':
		tests.getIndex();
		break;
	case 'test-incrementIndex':
		tests.incrementIndex();
		break;
	default:
		commands.list();
}