import req from './requests'
import global from './global'
import analytics from './analytics'
import cleanUrl from './clean-url'
import historySupported from './history-support'
import events from './events'

class Router {
  constructor() {
    this.supported = historySupported

    this.state = {
      title: null,
      state: window.history.state || null,
      path: window.location.pathname || '',
      navigating: false,
      last: '',
    }

    this.setState('path', this.state.path)

    window.onpopstate = () => {
      this.navigate(window.location.pathname + window.location.search + window.location.hash, false)
    }
  }

  pushState(state = this.state.state, title = this.state.title, path = this.state.path) {
    window.history.pushState(state, title, path)
  }

  replaceState(state = this.state.state, title = this.state.title, path = this.state.path) {
    window.history.replaceState(state, title, path)
  }

  setState(key, value) {
    this.state[key] = value
    global.setAttr(key, value)
  }

  hardNavigate(path) {
    window.location.href = path
  }

  navigate(newpath, pushState) {
    this.setState('last', this.state.path)
    this.setState('path', newpath)
    if (pushState !== false) {
      this.pushState()
    }

    this.setState('navigating', true)

    events.trigger(document, 'ajax-loading')

    req.get(this.state.path, 'router').then((data) => {
      window.scrollTo(0, 0)
      setTimeout(() => this.success(data), 250)
    }).catch((data) => {
      console.warn('Navigation failed', data)
      this.fail(data)
    })
  }

  success(response) {
    this.buildPage(response)
    this.setState('navigating', false)

    analytics('send', 'pageview', { page: cleanUrl(this.state.path) })
  }

  fail(_response) {
    const response = _response || { status: 0 }

    if (response.status > 499) {
      this.hardNavigate('/')
    } else if (response.status > 499) {
      this.navigate('/404.html')
    } else {
      this.hardNavigate(this.state.path)
    }
  }

  buildPage(response) {
    this._main = document.querySelector('main .inner')
    this._hidden = document.querySelector('main .hidden-inner')
    try {
      this._hidden.innerHTML = response
      this._main.innerHTML = this._hidden.querySelector('main .inner').innerHTML
      document.title = this._hidden.querySelector('title').innerHTML
      events.trigger(document, 'ajax-loaded')
    } catch (exc) {
      console.warn('Failed to update DOM')
      this.hardNavigate(this.state.path)
    }
  }

}

export default Router
