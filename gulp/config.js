const gutil = require('gulp-util')
const assign = require('lodash.assign')

const config = {
  source: 'src',
  target: 'dist',
  minify: false,
  debug: true,

  env: {
    prod: {
      target: 'dist',
      minify: true,
      debug: false,
    },
  },
}

// Extend with environment specific config
const env = gutil.env.env || (gutil.env.prod ? 'prod' : 'dev')
assign(config, config.env[env])

module.exports = config
