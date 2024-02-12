const express = require('express');
const mongoose = require('mongoose');


// Import the routes
const smallSuperSportRoutes = require('./routes/smallsupersport'); 
const middleSuperSportRoutes = require('./routes/middleSuperSport');
const largeSuperSportRoutes = require('./routes/largeSuperSport');
const hyperSportRoutes = require('./routes/hyperSport');
const contactUsRoutes = require('./routes/ContactUs');

require('dotenv').config();

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Use the imported routes
app.use('/smallsupersports', smallSuperSportRoutes); 
app.use('/middlesupersports', middleSuperSportRoutes); 
app.use('/largesupersports', largeSuperSportRoutes); 
app.use('/hypersports', hyperSportRoutes); 
app.use('/contact', contactUsRoutes);
// test api


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const port = process.env.PORT || 5000; // Use the PORT environment variable
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


