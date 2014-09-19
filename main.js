require('coffee-script/register');

// Specify, where is your Gulp config in CoffeeScript placed.
var gulpfile = 'tasks.coffee';

// Execute CoffeeScript config.
module.exports = require('./' + gulpfile);