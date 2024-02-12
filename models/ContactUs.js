const mongoose = require('mongoose');

// Define the schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
  },
  mobileNumber: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { 
  timestamps: true,
  collection: 'ContactUs' // Specify the collection name here
});

// Compile the schema into a model
const Contact = mongoose.model('ContactUs', contactSchema);

module.exports = Contact;
