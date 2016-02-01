var expect = require('chai').expect;
var index = require('./../index');

describe('+ index', function indexFile() {
  it('should return a test generator function if a valid runner is passed', function () {
    expect(index({ runner: 'qunit' })).to.be.ok;
    expect(index({ runner: 'mocha' })).to.be.ok;
  });

  it('should throw an error if an invalid runner or no runner is passed at all', function () {
    function callIndexWithNoRunner() {
      index();
    }

    function callIndexWithWrongRunner() {
      index({
        runner: 'wrong'
      });
    }

    expect(callIndexWithNoRunner).to.throw(Error);
    expect(callIndexWithWrongRunner).to.throw(Error);
  });
});
