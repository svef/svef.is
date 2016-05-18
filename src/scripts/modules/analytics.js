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


  }
  }

export default analytics
