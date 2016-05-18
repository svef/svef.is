const path = require('path')
const test = require('ava')

const fn = require(path.resolve('../../src/scripts/modules/clean-url'))

test('fn', t => {
  t.is(typeof fn, 'function', 'fn should be a function')
})

test.todo('Properly test clean-url module')
