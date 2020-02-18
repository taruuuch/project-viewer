const Project = require('../models/Project')
const { validationResult } = require('express-validator')

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()

    if (projects.length === 0) {
      return res.status(400).json({ message: 'Projects not exists!' })
    }

    res.json({
      message: 'Projects found',
      projects
    })
  } catch (e) {
    res.status(500).json({ message: '' })
  }
}

exports.getUserProjects = async (req, res) => {
  try {
    const { id } = req.decode

    const projects = await Project.find({ create_by: id })

    if (projects.length === 0) {
      return res.status(400).json({ message: 'This user didnt have a projects' })
    }

    res.json({
      message: '',
      projects
    })
  } catch (e) {
    res.status(500).json({ message: `${e.message}` })
  }
}

exports.getUserDevsProjects = async (req, res) => {
  try {
    const { userId } = req.params

    const projects = await Project.find({ devs: userId })

    if (projects.length === 0) {
      return res.status(400).json({ message: '' })
    }

    res.json({
      message: '',
      projects
    })
  } catch (e) {
    res.status(500).json({ message: '' })
  }
}

exports.getProjectInfo = async (req, res) => {
  try {
    const { projectId } = req.params

    const project = await Project.findOne({ _id: projectId })

    if (!project) {
      return res.status(400).json({ message: 'Project not exist!' })
    }

    res.json({
      message: `Project [${projectId}] found`,
      project
    })
  } catch (e) {
    res.status(500).json({ message: '' })
  }
}

exports.addProject = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Invalid data',
        errors: errors.array()
      })
    }

    const { title, logo, devs, description, tags } = req.body
    const { id } = req.decode

    const project = new Project({ title, logo, create_by: id, devs: [id], description, tags })

    await project.save().then(project => res.json({
      message: 'Project created!',
      project
    })
    )
  } catch (e) {
    res.status(500).json({ message: `Create project error: ${e.message}` })
  }
}

exports.updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const body = req.body;

    await Project.findOneAndUpdate(projectId, body, { new: true })
      .then(result => res.status(200).json({
          message: 'Project updated!',
          project: result
        })
      )
      .catch(error => res.status(500).json({
          message: 'Project updated error',
          error: error
        })
      )
  } catch (e) {
    res.status(500).json({ message: `${e.message}` })
  }
}

exports.deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params

    const result = await Project.deleteOne({ _id: projectId })

    if (!result) {
      return res.status(400).json({ message: '' })
    }

    res.json({ message: 'Project deleted!' })
  } catch (e) {
    res.status(500).json({ message: '' })
  }
}