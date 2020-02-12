const { Router } = require('express')
const { check } = require('express-validator')
const projectController = require('../controllers/auth.controller')
const router = Router()

module.exports = router