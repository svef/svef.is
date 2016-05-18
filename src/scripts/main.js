import analytics from './modules/analytics'

analytics('UA-77889324-1')

setTimeout(() => document.querySelector('html').classList.remove('loading'), 750)
