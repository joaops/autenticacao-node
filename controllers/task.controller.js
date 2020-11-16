const TaskModel = require('../models/task.model')

exports.index = async (req, res, next) => {
    try {
        const user = req.user
        const tasks = await TaskModel.find({ user: user._id })
        res.status(200).json(tasks);
    } catch (error) {
        next(error)
    }
}

exports.create = async (req, res, next) => {
    try {
        const user = req.user
        const { description } = req.body;
        const taskModel = new TaskModel({ description, user: user._id });
        const task = await taskModel.save()
        res.status(200).json(task);
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        await TaskModel.deleteOne({ _id: req.params.id, user: req.user._id })
        res.status(200).json()
    } catch (error) {
        next(error)
    }
}