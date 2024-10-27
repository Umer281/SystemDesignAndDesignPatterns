



function mainRoutes(app) {
  app.use('/url', require('./urlShortnerRoutes'))
}

module.exports = mainRoutes