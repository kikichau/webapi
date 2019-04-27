const express = require('express');
const router = express.Router();
const commantController = require('../app/api/controllers/commants');
router.get('/', commantController.getAll);
router.post('/', commantController.create);
router.get('/:commantId', commantController.getById);
router.put('/:commantId', commantController.updateById);
router.delete('/:commantId', commantController.deleteById);
module.exports = router;