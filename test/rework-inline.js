
var rework = require('rework')
  , inline = require('../')
  , fs = require('fs')
  , assert = require('assert')
  , read = fs.readFileSync;

function fixture(name) {
  return read('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('.inline(dir)', function () {
  it('should inline images', function () {
    rework(fixture('inline'))
      .use(inline('lib/', 'test/fixtures'))
      .toString()
      .should.equal(fixture('inline.out'));
  })

  it('should accept dirs in array', function () {
    rework(fixture('inline'))
      .use(inline(['lib/', 'test/fixtures']))
      .toString()
      .should.equal(fixture('inline.out'));
  })

  it('should throw error on nonexistent file', function () {
    (function () {
      rework(fixture('inline'))
        .use(inline())
        .toString()
    }).should.throw(/dot.png/)
  })
})
