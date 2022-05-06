const Task = require('../models/task');

exports.getData = async (req, res) => {
    try {
        const task = await Task.find();
        res.json({
            data: task
        })
    } catch (error) {
        console.log(error)
    } 
};

exports.addTask = async (req, res) => {
    try {
        // console.log(req.body)
        const newTask = new Task(req.body);
        await newTask.save();
        res.json({
           success: true,
           data: newTask,
        });
    } catch (error) {
        // console.log(error)
        res.json({
            success: false,
            error: error.message,
        })
    }
}

exports.editTask = async (req, res) => {
    try {
        // console.log(req.body)
        const { id } = req.query;
        const options = {
            new: true,
            runValidators: true,
          };
        const updateTask = await Task.findByIdAndUpdate(id, req.body, options);
        res.json({
            success: true,
            data: updateTask,
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        })
    }
}

exports.deleteData = async (req, res) => {
    try {
        const { id } = req.query;
        const deleteData = await Task.findByIdAndDelete(id);
        if (deleteData) {
            res.json({
                success: true,
                data: 'deleted',
            });
        } else {
            res.json({
                success: false,
                data: 'Id not found'
            })
        }
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        })
    }
}

exports.getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const getTaskById = await Task.findById(id);
        if (getTaskById) {
            res.json({
                success: true,
                data: getTaskById,
            });
        } else {
            res.json({
                success: false,
                data: 'Task not found'
            })
        }
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        })
    }
}