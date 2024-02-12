const Contact = require('../models/ContactUs'); // Adjust the path to where your model is located

// POST a new contact message
exports.createContact = async (req, res) => {
  try {
    const { name, email, mobileNumber, message } = req.body;

    // Create a new contact message document
    const newContact = await Contact.create({
      name,
      email,
      mobileNumber,
      message
    });

    // Send a response back to the client
    res.status(201).json({
      status: 'success',
      data: {
        contact: newContact
      }
    });
  } catch (err) {
    // Handle errors, for example, validation errors or duplicate entries
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
