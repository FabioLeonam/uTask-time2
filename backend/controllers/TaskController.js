const Task = require('../models/Task');

module.exports = {
  async index(req, res) {
    const task = await Task.find().sort('-createdAt');

    return res.json(task);
  },

  async store(req, res) {
    const { taskText, taskStatus } = req.body;

    const task = await Task.create({
      taskText,
      taskStatus,
    });

    return res.json(task);
  },
  async delete(req, res) {
    const task = await Task.findByIdAndDelete(req.params.id);

    return res.json({ task });
  },
  async update(req, res) {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);

    return res.json({ task });
  }
};
