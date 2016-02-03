// Requires
var fs = require('fs');

// Tasky Implementation API - do core tasky tasks like manage index of tasks, append and read from files, etc
var api = {};

api.configFile = '.tasky_config.json';

api.getIndex = function() {
	return JSON.parse(fs.readFileSync(this.configFile, "utf8")).index;
}

api.incrementIndex = function() {
	var current_index = this.getIndex(),
		new_config = { 'index': current_index + 1 }
	fs.writeFileSync(this.configFile, JSON.stringify(new_config));
}

module.exports = api;