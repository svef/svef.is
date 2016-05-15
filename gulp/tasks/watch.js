const gulp = require('gulp')
const watch = require('gulp-watch')
const config = require('../config')

gulp.task('watch', ['build'], () => {
  watch([
    `${config.source}/styles/**/*.scss`,
    `${config.source}/components/**/*.scss`,
  ], () => gulp.start('styles'))

  watch([
    `${config.source}/scripts/**/*.js`,
    `${config.source}/components/**/*.js`,
  ], () => gulp.start('scripts'))

  watch([
    `${config.source}/*.html`,
    `${config.source}/*.txt`,
    `${config.source}/images/**/*.{png,gif,jpg,jpeg,svg}`,
    `${config.source}/fonts/**/*`,
    `${config.source}/data/**/*`,
    `${config.source}/videos/**/*`,
  ], () => gulp.start('copy'))

  watch([
    `${config.source}/templates/**/*.{pug,md}`,
    `${config.source}/images/**/*.svg`,
  ], () => gulp.start('templates'))

  watch([
    `${config.source}/images/**/*.{png,gif,jpg,jpeg,svg}`,
  ], () => gulp.start('images'))
})
