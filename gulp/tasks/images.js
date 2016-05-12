const gulp = require('gulp')
const config = require('../config')
const errorHandler = require('../utils/error-handler')

gulp.task('images',
  () => gulp.src(`${config.source}/images/**/*.{png,gif,jpg,jpeg,svg,pdf}`)
    .on('error', errorHandler)
    .pipe(gulp.dest(`${config.target}/images/`))
)
