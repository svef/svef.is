const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('build', ['clean'],
  (done) => runSequence('copy', 'scripts', 'styles', 'templates', 'images', done)
)
