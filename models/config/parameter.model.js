const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const parameterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    cameraId: {
        type: ObjectId,
        ref: 'Camera'
    }
});

module.exports = mongoose.model('Parameter', parameterSchema);