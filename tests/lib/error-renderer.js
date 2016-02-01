var expect = require('chai').expect;
var renderer = require('./../../lib/error-renderer');

describe('+ lib/error-renderer', function errorRenderer() {
  it('should return a blank string when there is no errors', function () {
    var errors = undefined;

    expect(renderer(errors)).to.be.equals('');
  });

  it('should return a stack trace when a valid error is passed', function () {
    try {
      throw new Error('Random error.');
    } catch (e) {
      e.line = 10;
      e.column = 4;
      e.ruleId = 'comma-dangle';

      var errors = [e];
      var output = renderer(errors);
      expect(output).to.be.equal('10:4  - Random error. (comma-dangle)');
    }
  });
});
