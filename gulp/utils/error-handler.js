const notify = require('gulp-notify')
const gutil = require('gulp-util')

module.exports = function (err) {
  // eslint-disable-next-line prefer-rest-params
  notify.onError(err).apply(this, arguments)
  gutil.log(gutil.colors.red(err.toString()))
  this.emit('end')
}
