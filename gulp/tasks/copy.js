const gulp = require('gulp')
const config = require('../config')

gulp.task('copy',
  () => gulp.src([
    `${config.source}/**/*.html`,
    `${config.source}/CNAME`,
    `${config.source}/favicon.*`,
    `${config.source}/fonts/**`,
    `${config.source}/images/**`,
    `${config.source}/videos/**`,
  ], { base: config.source })
    .pipe(gulp.dest(config.target))
)
