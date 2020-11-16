const express = require('express')
const taskController = require('../controllers/task.controller')
const checkAuth = require('../middleware/check-auth')

const router = express.Router();

router.get('/', checkAuth, taskController.index);
router.post('/', checkAuth, taskController.create);
router.delete('/:id', checkAuth, taskController.delete);

module.exports = router;