#! /usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');

var user_arguments = process.argv.slice(2);