const gulp = require('gulp')
const gutil = require('gulp-util')
const browserify = require('browserify')
const babelify = require('babelify')
const uglify = require('gulp-uglify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const config = require('../config')
const errorHandler = require('../utils/error-handler')

gulp.task('scripts', ['lint'], () => {
  const b = browserify({
    entries: [`./${config.source}/scripts/main.js`],
    debug: config.debug,
  })

  return b.transform(
      babelify.configure({
        presets: ['es2015', 'stage-0'],
      })
    )
    .bundle()
    .on('error', errorHandler)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(config.minify ? uglify({ preserveComments: 'some' }) : gutil.noop())
    .pipe(gulp.dest(`${config.target}/scripts/`))
})
