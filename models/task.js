const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Task must have a title']
    },
    desc: String,
    hardest: {
        type: Number,
        required: [true, 'Task must have a hardest']
    }
});

const Task = model('Task', taskSchema);
module.exports = Task;