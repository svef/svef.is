// Polyfills
import 'es6-promise'
import 'whatwg-fetch'

import analytics from './modules/analytics'
import domready from './modules/domready'
import initRouter from './init/router'

analytics('UA-77889324-1')
initRouter()

domready(() => {
  setTimeout(() => document.querySelector('html').classList.remove('loading'), 750)
})
