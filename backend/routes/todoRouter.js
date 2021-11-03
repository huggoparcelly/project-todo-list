const router = require('express').Router();

const todoController = require('../controllers/todoController');

router.get('/', todoController.getTask);

router.post('/', todoController.createTask);

// router.put('/:id', todoController.updateTask);

// router.delete('/:id', removeTask);

module.exports = router;