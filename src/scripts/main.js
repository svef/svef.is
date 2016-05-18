import analytics from './modules/analytics'
import domready from './modules/domready'

analytics('UA-77889324-1')

domready(() => {
  setTimeout(() => document.querySelector('html').classList.remove('loading'), 750)
})
