import { omit, each } from 'lodash'

class Global {
  constructor() {
    this._id = 'svef'
    this._html = document.querySelector('html')
    this._attributes = {}

    each(this._html.attributes, (attribute) => {
      if (attribute.name.indexOf(`${this._id}-`) === 0) {
        this.setAttr(attribute.name.split(`${this._id}-`).pop(), attribute.value)
      }
    })
  }

  setAttr(_key, _value) {
    if (!_key) { return false }

    const key = this.cleanValue(_key)
    const value = this.cleanValue(_value)

    this._html.setAttribute(`${this._id}-${key}`, value)
    this._attributes[key] = value
    return true
  }

  getAttr(_key) {
    if (!_key) { return undefined }
    const key = this.cleanValue(_key)
    return this._attributes[key]
  }

  clearAttr(key) {
    if (!key) { return }
    this._html.removeAttribute(`${this._id}-${key}`)
    this._attributes = omit(this._attributes, key)
  }

  clearAllAttr() {
    each(this._attributes, (value, key) => {
      this.clear(key)
    })
  }

  cleanValue(value) {
    return value && value.toString().toLowerCase()
  }
}

export default new Global()
