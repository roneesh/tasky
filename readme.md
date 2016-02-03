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
- 'tasky list' -> lists all tasks

### Development guidelines
- variable names in snake_case
- function names in camelCase