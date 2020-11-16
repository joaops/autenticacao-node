const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    description: {
        type: String,
        required: [true, 'Informe a Descrição.']
    },
    user: { type: Schema.Types.ObjectId, ref: 'user' }
}, { versionKey: false });

const TaskModel = mongoose.model('task', TaskSchema);

module.exports = TaskModel;