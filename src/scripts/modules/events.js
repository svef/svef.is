import { each, camelCase, capitalize } from 'lodash'

class Events {
  constructor() {
    this._listeners = {}
  }

  trigger(el = document, type = 'custom-event', data = {}) {
    let event
    if (window.CustomEvent) {
      event = new CustomEvent(type, data)
    } else {
      event = document.createEvent(camelCase(type))
      event[`init${camelCase(capitalize(type))}`](type, true, true, data)
    }

    el.dispatchEvent(event)
  }

  on(el = document, type = 'custom-event', cb = () => {}) {
    this._listeners[el.nodeName] = this._listeners[el.nodeName] || {}
    this._listeners[el.nodeName][type] = this._listeners[el.nodeName][type] || []
    this._listeners[el.nodeName][type].push(cb)

    el.addEventListener(type, cb)
  }

  off(el = document, type = 'custom-event', _handler = () => {}) {
    each(this._listeners[el.nodeName][type], (handler) => {
      el.removeEventListener(type, handler || _handler)
    })
  }
}

export default new Events()
