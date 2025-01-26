const express = require('express');
const { addResult, getResults } = require('../controllers/resultController');
const verifyToken = require('../middleware/auth');
const router = express.Router();

router.post('/', verifyToken, addResult);
router.get('/', verifyToken, getResults);

module.exports = router;
