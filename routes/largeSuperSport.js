const express = require('express');
const router = express.Router();
const largeSuperSportController = require('../controllers/largeSuperSport');

router.post('/', largeSuperSportController.createMotorcycle);
router.get('/', largeSuperSportController.getMotorcycles);
router.get('/:id', largeSuperSportController.getMotorcycleById);
router.put('/:id', largeSuperSportController.updateMotorcycle);
router.delete('/:id', largeSuperSportController.deleteMotorcycle);

module.exports = router;
