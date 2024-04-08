import  Task  from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      name,
      done,
      projectId
    });
    return res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        id,
      },
    });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;

  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({
        error: 'Tarea no encontrada',
      });
    }
    task.set(req.body)

    await task.save();

    return res.status(200).json(task);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id,{
      attributes: ['name','done','projectId']
    });
    if (!task) {
      return res.status(404).json({
        error: 'Tarea no encontrada',
      });
    }
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
