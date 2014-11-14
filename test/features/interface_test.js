process.env.NODE_ENV = 'test';
var server = require('../../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

describe('User can', function() {

  var browser;
  before(function() {
    this.server = server.listen(1337);
    browser = new Browser({site: '127.0.0.1:1337'});
  });

  beforeEach(function(done) {
    browser.visit('/vote', done);
  });

  it('see happy button', function() {
    expect(browser.text('#plus')).to.be('');
  });

  xit('see sad button', function() {
    expect(browser.text('#minus')).to.eql('');
  });

});
