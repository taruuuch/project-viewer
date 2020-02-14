const { Router } = require('express')
const { check } = require('express-validator')
const { EMAIL_CHECK, PASSWORD_LENGTH } = require('../constants/auth.constants')
const { login, registration } = require('../controllers/auth.controller')
const router = Router()

router.post(
  '/registration',
  [
    check('email', EMAIL_CHECK).exists().normalizeEmail().isEmail(),
    check('password', PASSWORD_LENGTH).exists().isLength({ min: 6 })
  ],
  registration
)
router.post(
  '/login',
  [
    check('email', EMAIL_CHECK).exists().normalizeEmail().isEmail(),
    check('password', PASSWORD_LENGTH).exists().isLength({ min: 6 })
  ],
  login
)

module.exports = router