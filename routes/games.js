const express = require('express');
const router = express.Router();
const gameController = require('../app/api/controllers/games');
router.post('/', gameController.create);
router.put('/:gameId', gameController.updateById);
router.delete('/:gameId', gameController.deleteById);
router.get('/', gameController.getAll);
router.get('/:gameId', gameController.getById);
module.exports = router;