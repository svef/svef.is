import requests from '../modules/requests'

const apiUrl = 'http://api.svef.is'
const postTemplate = (post) => `
  <div class="post">
    <h2><a href="${post.url}">${post.title}</a></h2>
    <p>${post.content}</p>
  </div>
`

export default {
  load: () => {
    requests.get(`${apiUrl}/posts`).then((posts) => {
      const markup = JSON.parse(posts).map(postTemplate)
      document.getElementById('posts').innerHTML = markup
    })

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
