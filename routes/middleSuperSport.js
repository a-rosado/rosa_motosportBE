const express = require('express');
const router = express.Router();
const middleSuperSportController = require('../controllers/middleSuperSport');

router.post('/', middleSuperSportController.createMotorcycle);
router.get('/', middleSuperSportController.getMotorcycles);
router.get('/:id', middleSuperSportController.getMotorcycleById);
router.put('/:id', middleSuperSportController.updateMotorcycle);
router.delete('/:id', middleSuperSportController.deleteMotorcycle);

module.exports = router;
