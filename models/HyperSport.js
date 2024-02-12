const mongoose = require('mongoose');

const HyperSportSchema = new mongoose.Schema({
  year: Number,
  make: { type: String, required: true },
  model: { type: String, required: true },
  specs: {
    engine: {
      engineType: String,
      displacement: Number,
      boreStroke: String,
      compressionRatio: Number,
      maximumTorque: String,
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
      aerodynamics: String, // Special for HyperSport's downforce generating devices
      paintTechnology: String, // Reflecting HyperSport's Highly Durable Paint
      instrumentation: String, // To note the unique analog and LCD setup of the HyperSport
      colorChoices: String
    }
  }
}, { collection: 'HyperSport' }); // Explicitly setting the collection name

const HyperSport = mongoose.model('HyperSport', HyperSportSchema);

module.exports = HyperSport;

