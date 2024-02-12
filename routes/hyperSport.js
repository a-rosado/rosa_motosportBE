const express = require('express');
const router = express.Router();
const hyperSportController = require('../controllers/hyperSport');

router.post('/', hyperSportController.createMotorcycle);
router.get('/', hyperSportController.getMotorcycles);
router.get('/:id', hyperSportController.getMotorcycleById);
router.put('/:id', hyperSportController.updateMotorcycle);
router.delete('/:id', hyperSportController.deleteMotorcycle);

module.exports = router;
