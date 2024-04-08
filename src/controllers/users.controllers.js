import User from "../models/User.js";
import Project from "../models/Project.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: [Project] });
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, age } = req.body;
  try {
    const newUser = await User.create({
      name,
      age,
    });
    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado',
      });
    }
    user.set(req.body);
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: ['name', 'age']
    });
    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado',
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const setUsersProjects = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado',
      });
    }
    await user.addProjects(req.body.projectId); // Suponiendo que req.body.projectIds es un array de IDs de proyectos
    const projects = await user.getProjects();
    return res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};