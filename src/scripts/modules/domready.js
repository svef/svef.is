
export default (callback, ajaxLoaded) => {
  if (document.readyState !== 'loading') {
    callback()
  } else {
    document.addEventListener('DOMContentLoaded', callback)
    document.addEventListener('ajax-loaded', ajaxLoaded || callback)
  }
}
