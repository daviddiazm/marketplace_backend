import { where } from "sequelize";
import  Project  from "../models/Project.js";
import  Task  from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    return res.json(projects)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


export const createProject = async (req, res) => {
  const { name, priority, descirpion } = req.body
  try {
    const newProject = await Project.create({
      name,
      priority,
      descirpion
    })
    return res.json(newProject)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


export const deleteProject = async (req, res) => {
  const { id } = req.params
  try {
    await Project.destroy({
      where: {
        id
      }
    })
    return res.status(204)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


export const updateProject = async (req, res) => {
  const { id } = req.params
  const { name, priority, descirpion } = req.body

  try {
    const project = await Project.findByPk(id)
    if (!project) {
      return res.status(404).json({
        error: 'project no encontrado',
      });
    }
    project.name = name
    project.priority = priority
    project.descirpion = descirpion

    await project.save()

    return res.status(200).json(project)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


export const getOneProject = async (req, res) => {
  const { id } = req.params
  try {
    const project = await Project.findByPk(id)
    if (!project) {
      return res.status(404).json({
        error: 'project no encontrado',
      });
    }
    return res.status(200).json(project)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
} 

export const getProjectTasks = async (req, res) => {
  const { id } = req.params
  try {
    const tasks = await Task.findAll({
      where: {projectId: id}
    })
    return res.status(200).json(tasks)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}