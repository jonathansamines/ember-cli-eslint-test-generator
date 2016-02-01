var path = require('path');
var render = require('./error-renderer');
var jsStringEscape = require('js-string-escape');

/**
 * Qunit tests generator for the output produced by eslint
 * Generates a test case for a passed/failed qunit test
 */
module.exports = function eslintTestGenerator(relativePath, errors) {
  var pass = !errors || errors.length === 0;

  return "import { module, test } from 'qunit';\n" +
    "module('ESLint - " + path.dirname(relativePath) + "');\n" +
    "test('" + relativePath + " should pass ESLint', function(assert) {\n" +
    "  assert.ok(" + pass + ", '" + relativePath + " should pass ESLint." +
    jsStringEscape("\n" + render(errors)) + "');\n" +
   "});\n";
}
