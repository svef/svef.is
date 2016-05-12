const gulp = require('gulp')
const config = require('../config')

const rimraf = require('rimraf')

gulp.task('clean',
  (done) => rimraf(config.target, done)
)
