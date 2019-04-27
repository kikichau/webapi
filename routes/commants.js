const express = require('express');
const router = express.Router();
const commantController = require('../app/api/controllers/commants');
router.post('/', commantController.create);
router.put('/:commantId', commantController.updateById);
router.delete('/:commantId', commantController.deleteById);
router.get('/', commantController.getAll);
router.get('/:commantId', commantController.getById);
module.exports = router;