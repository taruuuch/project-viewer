const express = require('express')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const cors = require('cors')
const setupLogger = require('./config/logger.config')
const setupRoutes = require('./utils/routes.utils')
const setupSwagger = require('./docs/swagger.setup');

const { PORT } = require('./config/base.config')
const app = express()

// app.use(cors({
//   // origin: ,
//   // methods: ,
//   // allowedHeaders:
// }))
app.use('/public', express.static(__dirname + '/public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: `Too many accounts created from this IP, please try again after an hour`
}))
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

module.exports = app