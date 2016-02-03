// Requires
var fs = require('fs');

// Tasky Implementation API - do core tasky tasks like manage index of tasks, append and read from files, etc, it mostly interacts with .tasky_config.json
var api = {};

api.config_file = '.tasky_config.json';

api.getIndex = function() {
	return JSON.parse(fs.readFileSync(this.config_file, "utf8")).index;
}

api.incrementIndex = function() {
	var current_index = this.getIndex(),
		new_config = { 'index': current_index + 1 }
	fs.writeFileSync(this.config_file, JSON.stringify(new_config));
}

module.exports = api;