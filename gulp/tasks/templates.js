const path = require('path')
const gulp = require('gulp')
const pug = require('gulp-pug')
const config = require('../config')
const errorHandler = require('../utils/error-handler')

gulp.task('templates',
  () => gulp.src(`${config.source}/templates/**/*.pug`)
    .pipe(pug({
      pretty: config.minify,
      basedir: path.join(process.cwd(), 'src'),
      locals: {
        // content will be injected here
      },
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target))
)
