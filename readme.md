# Tasky

### Installation
1. clone this repo
2. run 'npm link' in the repo gain the bin command of 'tasky'

### Usage
1. Run 'tasky init' first, otherwise the app will throw an error, this will create a .tasky.json and .tasky_config.json file in the directory you run this command in.
2. Run 'tasky help' to see a list of commands
3. Commands are of flavor: tasky 'core command' 'id or string', though core command and id/string do not need to be in quotes or parentheses
4. All tasks are local to the folder you ran 'taksy init' in.

### Examples
- 'tasky' -> with no arguments, lists all tasks
- 'tasky add first task' -> will create a task with a description of 'first task'
- 'tasky show complete' -> will list all completed tasks
- 'tasky show incomplete' -> will list all incomplete tasks

### Development guidelines
- variable names in snake_case
- function names in camelCase
- the api.js file is a core file that manages reading and writing the .json files
- commands.js are the functions called from the command line, these functions should loosely wrap the functionality of api.js functions, and provide things like context and printing of tasks. 
- if you're adding a feature, first write the proper function in api.js that will manipulate/fetch/delete the task you want, then write a wrapper function in commands.js that will let the user initiate the command, and provide logging so they know if the task was done

### Todos
- tasky doesn't delete tasks right now, I think that's a perfect thing to implement on a pairing session :-)
- tasky should also update task descriptions, but this might be a pretty involved fix, since it would alter how we accept user arguments
- On that note, overhall user arguments to accept things like flags and make it more like other CLI tools
- add tags to tasks, so they can have tags like 'development', or 'personal', that way you could run "tasky show -tag=personal" to a see a list of all tasks tagged 'personal'
- 'tasky remind' would be a fun task to implement, and it could remind you to do tasks after a specified unit of time, there could also be a -g option that reminds you on any open command lines
- 'tasky update', which would check for an updated repo and pull down if there is one
- and we could much much more!