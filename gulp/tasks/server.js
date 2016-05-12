const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const config = require('../config')
const historyApiFallback = require('connect-history-api-fallback')

gulp.task('server', ['watch'], () => {
  browserSync.init({
    files: `${config.target}/**/*`,
    server: {
      baseDir: config.target,
    },
    logPrefix: '-server-',
    notify: false,
    open: false,
    middleware: [historyApiFallback()],
  })
})
