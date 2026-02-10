const Task = require("../model/Task");

const getAllTasks = (req, res) => {
  res.send("all items from tasks");
};

const createTask = async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.json(req.params.id);
};

const deleteTask = (req, res) => {
  res.send("delete task");
};
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
