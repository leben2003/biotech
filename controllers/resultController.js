const Result = require('../models/Result');

exports.addResult = async (req, res) => {
    try {
        const { patientId, type, results } = req.body;
        const newResult = new Result({ patientId, type, results });
        await newResult.save();
        res.status(201).send(newResult);
    } catch (error) {
        res.status(500).send({ error: 'Failed to add result' });
    }
};

exports.getResults = async (req, res) => {
    try {
        const results = await Result.find().populate('patientId');
        res.send(results);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch results' });
    }
};
