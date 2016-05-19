import requests from '../modules/requests'

export default {
  load: () => {
    const form = document.getElementById('slack-invite')
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const email = document.getElementById('slack-email').value
      requests.post(`${apiUrl}/slack`, { email }).then((result) => {
        if (result.ok) {
          form.remove()
        }
      })
    })
  },
}
