const glob = require('glob')

// eslint-disable-next-line global-require
glob.sync('./gulp/tasks/*.js').forEach((task) => require(task))
