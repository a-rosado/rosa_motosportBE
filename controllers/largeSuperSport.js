const LargeSuperSport = require('../models/LargeSuperSport');

exports.createMotorcycle = async (req, res) => {
  try {
    const newMotorcycle = new LargeSuperSport(req.body);
    const result = await newMotorcycle.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getMotorcycles = async (req, res) => {
  try {
    const motorcycles = await LargeSuperSport.find();
    res.status(200).send(motorcycles);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getMotorcycleById = async (req, res) => {
  try {
    const motorcycle = await LargeSuperSport.findById(req.params.id);
    if (!motorcycle) {
      return res.status(404).send();
    }
    res.status(200).send(motorcycle);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateMotorcycle = async (req, res) => {
  try {
    const motorcycle = await LargeSuperSport.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!motorcycle) {
      return res.status(404).send();
    }

    res.status(200).send(motorcycle);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteMotorcycle = async (req, res) => {
  try {
    const motorcycle = await LargeSuperSport.findByIdAndDelete(req.params.id);

    if (!motorcycle) {
      return res.status(404).send();
    }

    res.status(200).send(motorcycle);
  } catch (error) {
    res.status(500).send(error);
  }
};
