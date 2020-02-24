const express = require('express')
const bodyParser = require('body-parser')
const setupLogger = require('./config/logger.config')
const setupRoutes = require('./util/routes.utils')
const setupSwagger = require('./docs/swagger.setup');

const { PORT } = require('./config/base.config')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(setupLogger)

setupRoutes(app)
setupSwagger(app)

app.use(async (req, res, next) => {
  const error = new Error(`Api link not found! Go to localhost:${PORT} for check available links`)
  error.status = 404
  error.path = `${req.protocol}://${req.get('host')}${req.originalUrl}`

  next(error)
})
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      code: error.status,
      path: error.path
    }
  })
})

module.exports = app;