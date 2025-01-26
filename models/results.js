const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    results: { type: Object, required: true },
});

module.exports = mongoose.model('Result', resultSchema);
