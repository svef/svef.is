
class Requests {
  constructor() {
    this.active = {}
    this.skip = []
  }

  ajax(url, options) {
    return new Promise((resolve, reject) => {
      if (!url) {
        reject({ error: 'no url' })
      } else {
        fetch(url, options)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              return response.text()
            }
            reject(response)
            return false
          })
          .then((response) => {
            resolve(response)
          })
      }
    })
  }

  raw(url, options) {
    return this.ajax(url, options)
  }

  get(url) {
    return this.ajax(url, {
      method: 'GET',
    })
  }

  post(url, params) {
    return this.ajax(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((result) => JSON.parse(result))
  }
}

export default new Requests()
