const express = require('express');
const router = express.Router();
const smallSuperSportController = require('../controllers/smallSuperSport');

router.post('/', smallSuperSportController.createMotorcycle);
router.get('/', smallSuperSportController.getMotorcycles);
router.get('/:id', smallSuperSportController.getMotorcycleById);
router.put('/:id', smallSuperSportController.updateMotorcycle);
router.delete('/:id', smallSuperSportController.deleteMotorcycle);

module.exports = router;
