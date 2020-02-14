const { Router } = require('express')
const { getAllProjects, getUserProjects, getProjectInfo,  addProject, updateProject, deleteProject, getUserDevsProjects } = require('../controllers/project.controller')
const authMiddleware = require('../middleware/auth.middleware')
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