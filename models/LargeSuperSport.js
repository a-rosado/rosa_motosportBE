const mongoose = require('mongoose');

const LargeSuperSportSchema = new mongoose.Schema({
  year: Number,
  make: { type: String, required: true },
  model: { type: String, required: true },
  specs: {
    engine: {
      engineType: String,
      displacement: Number,
      boreStroke: String,
      compressionRatio: Number,
      fuelDelivery: String,
      transmission: String,
      finalDrive: String,
      fuelCapacity: Number
    },
    chassis: {
      suspensionFront: String,
      suspensionRear: String,
      brakesFront: String,
      brakesRear: String,
      tiresFront: String,
      tiresRear: String
    },
    dimensions: {
      lxwxh: String,
      seatHeight: Number,
      wheelbase: Number,
      rakeCasterAngle: String,
      trail: Number,
      groundClearance: Number,
      fuelEconomy: Number,
      wetWeight: Number
    },
    details: {
      frameType: String,
      specialFeatures: String,
      colorChoices: String
    },
    performance: {
      maxPower: String,
      maxTorque: String,
      topSpeed: String
    }
  }
}, { collection: 'LargeSuperSport' }); //  setting the collection name

// Create the model from the schema and associate with the 'LargeSuperSport' collection
const LargeSuperSport = mongoose.model('LargeSuperSport', LargeSuperSportSchema);

module.exports = LargeSuperSport;

