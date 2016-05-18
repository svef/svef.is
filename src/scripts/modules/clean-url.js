
export default function (providedUrl) {
  let url = providedUrl || global.location.pathname

  if (url.indexOf('localhost') > -1 || url.indexOf('.is') > -1) {
    const divider = url.indexOf('localhost') > -1 ? 'localhost:1337' : '.is'
    url = url.split(divider)
    url = url[1] || url[0]
  }
  if (url.indexOf('#') > -1) {
    url = url.split('#')
    url = url[0]
  }
  if (url.indexOf('?') > -1) {
    url = url.split('?')
    url = url[0]
  }
  return url
}
