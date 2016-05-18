let injected = false

export default (code) => {
  if (!code) {
    console.warn('Analytics: No UA code provided')
    return () => {}
  }

  if (!injected) {
    // eslint-disable-next-line
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  }
  injected = true

  window.GoogleAnalyticsObject = 'ga'
  window.ga = function (...args) {
    (window.ga.q = window.ga.q || []).push(args)
  }
  window.ga.l = 1 * new Date()

  window.ga('create', code, 'auto')
  window.ga('send', 'pageview')

  return function (...args) {
    window.ga.apply(this, args)
  }
}
