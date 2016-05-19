import keys from '../modules/keys'
import events from '../modules/events'
import domready from '../modules/domready'
import Router from '../modules/router'
import { each } from 'lodash'

export default (routes) => {
  const router = new Router(routes)
  if (!router.supported) {
    console.warn('No history API support')
    return
  }

  const selector = 'main a:not([target])'
  const nopes = ['#', 'http', 'mailto', 'tel']

  const clickHandler = (el) => {
    events.on(el, 'click', (event) => {
      if (keys.isClickModifier(event)) { return }

      const path = event.currentTarget.getAttribute('href') || event.currentTarget.pathname

      let neverMind = false
      each(nopes, (nope) => {
        if (path.indexOf(nope) === 0) {
          neverMind = true
        }
      })
      if (neverMind) {
        return
      }

      router.navigate(path)

      event.preventDefault()
      // NOTE: browser hack to prevent default behaviour
      // eslint-disable-next-line consistent-return
      return false
    })
  }


  domready(() => {
    each(document.body.querySelector('main').querySelectorAll(selector), (el) => clickHandler(el))
  }, () => {
    each(document.body.querySelector('main .inner').querySelectorAll(selector), (el) => clickHandler(el))
  })
}
