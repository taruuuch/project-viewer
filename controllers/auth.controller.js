const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { validationResult } = require('express-validator')
const { AUTH_ERROR, USER_EXIST, USER_CREATED, INVALID_DATA, USER_NOT_FOUND, INVALID_PASSWORD, AUTH_SUCCESS } = require('../constants/auth.constants')
const { TOKEN_EXPIRES } = require('../config/auth.config')
const { generateToken } = require('../util/auth.utils')

exports.registration = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: INVALID_DATA
      })
    }

    const { email, password } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: USER_EXIST })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({
      email,
      password: hashedPassword
    })

    await user.save().then(user => res.json({
      message: USER_CREATED,
      token: {
        accessToken: generateToken(user.id),
        expires: TOKEN_EXPIRES
      }
    })
    )
  } catch (e) {
    res.status(500).json({ message: AUTH_ERROR })
  }
}

exports.login = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: INVALID_DATA
      })
    }

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: USER_NOT_FOUND })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: INVALID_PASSWORD })
    }

    res.json({
      message: AUTH_SUCCESS,
      token: {
        accessToken: generateToken(user.id),
        expires: TOKEN_EXPIRES
      }
    })
  } catch (e) {
    res.status(500).json({ message: AUTH_ERROR })
  }
}