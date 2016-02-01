var qunitTestGenerator = require('./lib/qunit-test-generator');
var mochaTestGenerator = require('./lib/mocha-test-generator');

module.exports = function(options) {
  if (options.runner === 'qunit') {
    return qunitTestGenerator;
  }

  if (options.runner === 'mocha') {
    return mochaTestGenerator;
  }

  throw new Error('The runner provided is not valid.');
}
