/* eslint-disable */
// Provided by google
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
/* eslint-enable */

window.GoogleAnalyticsObject = 'ga'
window.ga = function (...args) {
  (window.ga.q = window.ga.q || []).push(args)
}
window.ga.l = 1 * new Date()

window.ga('create', 'UA-77889324-1', 'auto')
window.ga('send', 'pageview')

const analytics = function (...args) {
  window.ga.apply(this, args)
}

analytics.cleanUrl = function (providedUrl) {
  let url = providedUrl || window.location.pathname

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

export default analytics
