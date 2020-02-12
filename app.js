const express = require('express')
const connectLogger = require('./config/logger.config')
const { AUTH_ROUTE, PROJECT_ROUTE } = require('./config/routes.config.js')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ extended: true }))
app.use(connectLogger)
app.use(AUTH_ROUTE, require('./routes/auth.routes'))
app.use(PROJECT_ROUTE, require('./routes/project.routes'))
app.use(async (req, res, next) => {
  const error = new Error(`Api link not found! Go to localhost:${PORT}/api/v1/docs for check available links`)
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