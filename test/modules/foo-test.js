const path = require('path')
const test = require('ava')

const foo = require(path.resolve('../../src/scripts/modules/foo'))

test('foo', t => {
  t.is(foo('foo'), 'foo-bar', 'foo should return -bar with the prefix foo')
})
