const { Router } = require('express');
const { check } = require('express-validator');
const { EMAIL_CHECK, PASSWORD_LENGTH } = require('../constants/auth.constants');
const authController = require('../controllers/auth.controller');
const router = Router();

router.post(
  '/registration',
  [
    check('email', EMAIL_CHECK).exists().normalizeEmail().isEmail(),
    check('password', PASSWORD_LENGTH).exists().isLength({ min: 6 })
  ],
  authController.registration
);
router.post(
  '/login',
  [
    check('email', EMAIL_CHECK).exists().normalizeEmail().isEmail(),
    check('password', PASSWORD_LENGTH).exists().isLength({ min: 6 })
  ],
  authController.login
);

module.exports = router;