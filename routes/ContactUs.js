const express = require('express');
const router = express.Router();
const contactController = require('../controllers/ContactUs'); // Adjust the path as necessary

// Route for creating a new contact message
router.post('/', contactController.createContact);

module.exports = router;
