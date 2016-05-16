import foo from './modules/foo'

console.log(foo())

setTimeout(() => document.querySelector('html').classList.remove('loading'), 500)
