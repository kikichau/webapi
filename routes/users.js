const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.put('/register:userId', userController.updateById);
router.get('/register:userId', userController.getById)
module.exports = router;