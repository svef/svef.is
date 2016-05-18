# svef.is
[![Build Status](https://img.shields.io/travis/svef/svef.is/develop.svg?maxAge=3600&style=flat)](https://travis-ci.org/svef/svef.is)
[![Coveralls](https://img.shields.io/coveralls/svef/svef.is/develop.svg?maxAge=3600&style=flat)](https://coveralls.io/github/svef/svef.is?branch=develop)
![GitHub Release](https://img.shields.io/github/release/svef/svef.is.svg?maxAge=3600&style=flat)

[![](https://img.shields.io/waffle/label/svef/svef.is/Ready.svg?maxAge=3600&style=flat)](https://waffle.io/svef/svef.is)
[![](https://img.shields.io/waffle/label/svef/svef.is/In progress.svg?maxAge=3600&style=flat)](https://waffle.io/svef/svef.is)
[![](https://img.shields.io/waffle/label/svef/svef.is/Infrastructure.svg?maxAge=3600&style=flat)](https://waffle.io/svef/svef.is)
[![](https://img.shields.io/waffle/label/svef/svef.is/New feature.svg?maxAge=3600&style=flat)](https://waffle.io/svef/svef.is)
[![](https://img.shields.io/waffle/label/svef/svef.is/Help wanted.svg?maxAge=3600&style=flat)](https://waffle.io/svef/svef.is)

## Quick start

These are the available scripts

*Run local dev environment*
```
npm run dev
  supervisor --watch gulp,gulpfile.js --no-restart-on exit --quiet --exec gulp server
```

*Run lint*
```
npm run lint
  eslint .
```

*Run tests*
```
npm run test
  nyc ava
```

*Run tests on every change*
```
npm run test-dev
  supervisor --quiet --watch test,src/scripts --no-restart-on exit --exec npm -- run test --silent
```

*Send coverage to coveralls*
```
npm run coverage
  nyc report --reporter=text-lcov | coveralls
```

*Single static build*
```
npm run build
  gulp build
```
