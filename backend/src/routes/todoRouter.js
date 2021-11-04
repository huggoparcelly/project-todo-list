const router = require('express').Router();

const todoController = require('../controllers/todoController');

router.get('/', todoController.getTask);
router.post('/', todoController.createTask);
router.put('/:id', todoController.updateTask);
router.put('/:id/status', todoController.updateStatus);
router.delete('/:id', todoController.removeTask);

module.exports = router;