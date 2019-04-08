const express = require('express');
const router = express.Router();
const gameController = require('../app/api/controllers/games');
router.get('/', gameController.getAll);
router.post('/', gameController.create);
router.get('/:gameId', gameController.getById);
router.put('/:gameId', gameController.updateById);
router.delete('/:gameId', gameController.deleteById);
module.exports = router;