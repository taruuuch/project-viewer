const Project = require('../models/Project')
const { validationResult } = require('express-validator')
const { PROJECTS_NOT_FOUND, USER_DIDNT_HAVE_PROJECTS,  PROJECT_NOT_FOUND, INVALID_FOUND, PROJECT_CREATE_ERROR,  PROJECT_UPDATE_ERROR, PROJECT_DELETED, PROJECT_DELETED_ERROR } = require('../constants/project.constants')

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()

    if (projects.length === 0) {
      return res.status(400).json({ message: PROJECT_NOT_FOUND })
    }

    res.json(projects)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

exports.getUserProjects = async (req, res) => {
  try {
    const { id } = req.decode

    const projects = await Project.find({ create_by: id })

    if (projects.length === 0) {
      return res.status(400).json({ message: USER_DIDNT_HAVE_PROJECTS })
    }

    res.json(projects)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

exports.getUserDevsProjects = async (req, res) => {
  try {
    const { userId } = req.params

    const projects = await Project.find({ devs: userId })

    if (projects.length === 0) {
      return res.status(400).json({ message: PROJECTS_NOT_FOUND })
    }

    res.json(projects)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

exports.getProjectInfo = async (req, res) => {
  try {
    const { projectId } = req.params

    const project = await Project.findOne({ _id: projectId })

    if (!project) {
      return res.status(400).json({ message: PROJECT_NOT_FOUND })
    }

    res.json(project)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

exports.addProject = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: INVALID_FOUND,
        errors: errors.array()
      })
    }

    const { title, logo, devs, description, tags } = req.body
    const { id } = req.decode

    const project = new Project({ title, logo, create_by: id, devs: [id], description, tags })

    await project.save().then(project => res.json(project)
    )
  } catch (e) {
    res.status(500).json({ message: `${PROJECT_CREATE_ERROR} ${e.message}` })
  }
}

exports.updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const body = req.body;

    await Project.findOneAndUpdate(projectId, body, { new: true })
      .then(project => res.status(200).json(project))
      .catch(error => res.status(500).json({
        message: PROJECT_UPDATE_ERROR,
        error: error
      }))
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

exports.deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params

    const result = await Project.deleteOne({ _id: projectId })

    if (!result) {
      return res.status(400).json({ message: PROJECT_DELETED_ERROR })
    }

    res.json({ message: PROJECT_DELETED })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}