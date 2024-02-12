require('dotenv').config(); // Ensure this is at the top of the file

const mongoose = require('mongoose');
const SmallSuperSport = require('../models/smallSuperSport'); // Correct path to your model

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const yamahaR3 = {
  make: 'Yamaha',
  model: 'R3',
  specs: {
    engine: {
      engineType: '321cc liquid-cooled, 4-stroke, DOHC inline twin-cylinder; 4-valves per cylinder',
      displacement: '321cc',
      boreStroke: '68.0mm x 44.1mm',
      compressionRatio: '11.2:1',
      fuelDelivery: 'Fuel injection',
      transmission: '6-speed; multiplate wet clutch',
      finalDrive: 'Chain',
      fuelCapacity: '3.7 gal',
    },
    chassis: {
      suspensionFront: 'Inverted telescopic fork; 5.1-in travel',
      suspensionRear: 'Monocross single shock, adjustable preload; 4.9-in travel',
      brakesFront: '298mm hydraulic disc with ABS',
      brakesRear: '220mm hydraulic disc with ABS',
      tiresFront: '110/70-17 Dunlop® Sportmax GPR-300F',
      tiresRear: '140/70-17 Dunlop® Sportmax GPR-300R',
    },
    dimensions: {
      lxwxh: '82.3 in x 28.7 in x 44.9 in',
      seatHeight: '30.7 in',
      wheelbase: '54.3 in',
      rakeCasterAngle: '25.0°',
      trail: '3.7 in',
      groundClearance: '6.3 in',
      fuelCapacity: '3.7 gal',
      fuelEconomy: '56 mpg',
      wetWeight: '375 lb',
    },
    // Add other details and performance fields as needed
  },
  imageUrl: 'URL_to_Yamaha_R3_image' // Replace with the actual image URL
};

// Add other motorcycles as needed

SmallSuperSport.insertMany([yamahaR3 /*, other motorcycles... */])
  .then(() => console.log('Motorcycles added to the database'))
  .catch(err => console.error(err));
