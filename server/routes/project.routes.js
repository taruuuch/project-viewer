const { Router } = require('express')
const { check } = require('express-validator')
const { getAllProjects, getUserProjects, getProjectInfo, addProject, updateProject, deleteProject, getUserDevsProjects } = require('../controllers/project.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const { singleUpload } = require('../middlewares/upload.middleware')
const router = Router()

router.get(
  '/',
  getAllProjects
)
router.get(
  '/my',
  authMiddleware,
  getUserProjects
)
router.post(
  '/',
  authMiddleware,
  singleUpload('cover'),
  addProject
)
router.get(
  '/user/:userId',
  getUserDevsProjects
)
router.get(
  '/:projectId',
  getProjectInfo
)
router.patch(
  '/:projectId',
  authMiddleware,
  updateProject
)
router.delete(
  '/:projectId',
  authMiddleware,
  deleteProject
)

module.exports = router