const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const config = require('../config')
const plumber = require('gulp-plumber')
const errorHandler = require('../utils/error-handler')

gulp.task('styles',
  () => gulp.src([`${config.source}/styles/*.scss`, `!${config.source}/styles/_*.scss`])
    .pipe(plumber({ errorHandler }))
    .pipe(sass({
      includePaths: [`${config.source}/styles`, 'node_modules'],
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
    }))
    .pipe(gulp.dest(`${config.target}/styles`))
)
