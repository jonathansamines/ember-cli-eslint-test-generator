var path = require('path');
var render = require('./error-renderer');
var jsStringEscape = require('js-string-escape');

/**
 * Mocha tests generator for the output produced by eslint
 * Generates a test case for a passed/failed mocha test
 */
module.exports = function eslintTestGenerator(relativePath, errors) {
  var pass = !errors || errors.length === 0;

  return "import { describe, it } from 'mocha';\n" +
    "import { assert } from 'chai';\n" +
    "describe('ESLint - " + path.dirname(relativePath) + "', function() {\n" +
    "  it('" + relativePath + " should pass ESLint', function() {\n" +
    "    assert.ok(" + pass + ", '" + relativePath + " should pass ESLint." +
    jsStringEscape("\n" + render(errors)) + "');\n" +
   "  });\n});\n";
}
