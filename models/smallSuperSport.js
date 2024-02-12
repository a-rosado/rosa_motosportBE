const mongoose = require('mongoose');

const SmallSuperSportSchema = new mongoose.Schema({
  year: Number,
  make: { type: String, required: true },
  model: { type: String, required: true },
  specs: {
    engine: {
      engineType: String,
      displacement: String,
      boreStroke: String,
      compressionRatio: String,
      fuelDelivery: String,
      transmission: String,
      finalDrive: String,
      fuelCapacity: Number,
    },
    chassis: {
      suspensionFront: String,
      suspensionRear: String,
      brakesFront: String,
      brakesRear: String,
      tiresFront: String,
      tiresRear: String,
    },
    dimensions: {
      lxwxh: String,
      seatHeight: Number,
      wheelbase: Number,
      rakeCasterAngle: String,
      trail: Number,
      groundClearance: Number,
      fuelEconomy: Number,
      wetWeight: Number,
    },
    details: {
      frameType: String,
      specialFeatures: String,
      colorChoices: String,
    },
  },
}, { collection: 'SmallSuperSport' }); // Specify the collection name here

const SmallSuperSport = mongoose.model('SmallSuperSport', SmallSuperSportSchema,);

module.exports = SmallSuperSport;

