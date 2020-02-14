const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../config/auth.config')
const { TOKEN_NOT_PROVIDE, FAILED_TOKEN } = require('../constants/auth.constants')

module.exports = (req, res, next) => {
  try {
    let token = req.get('Authorization')

    if (!token) {
      return res.status(401).json({ message: TOKEN_NOT_PROVIDE })
    }

    token = token.replace('Bearer ', '')

    jwt.verify(
      token,
      TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return res.status(500).send({
            message: FAILED_TOKEN,
            auth: false
          })
        }

        req.decode = decoded
        next()
      }
    )
  } catch (error) {
    res.status(500).json({ message: `${MIDDLEWARE_ERROR} ${error.message}` })
  }
}