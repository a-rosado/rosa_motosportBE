const HyperSport = require('../models/HyperSport');

exports.createMotorcycle = async (req, res) => {
  try {
    const newMotorcycle = new HyperSport(req.body);
    const result = await newMotorcycle.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getMotorcycles = async (req, res) => {
  try {
    const motorcycles = await HyperSport.find();
    // Log the result to the console for debugging
    console.log("Motorcycles found:", motorcycles);

    if (motorcycles.length === 0) {
      // If the array is empty, send a 404 Not Found status with a message
      console.log("No motorcycles found in the database.");
      return res.status(404).send({ message: "No motorcycles found." });
    }

    // If motorcycles are found, send them back in the response
    res.status(200).json({ motorcycles: motorcycles });
  } catch (error) {
    // If there's an error, log it and send a 500 Internal Server Error status
    console.error("Error fetching motorcycles:", error);
    res.status(500).send({ message: "Error fetching motorcycles", error: error.message });
  }
};


exports.getMotorcycleById = async (req, res) => {
  try {
    const motorcycle = await HyperSport.findById(req.params.id);
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
    const motorcycle = await HyperSport.findByIdAndUpdate(req.params.id, req.body, {
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
    const motorcycle = await HyperSport.findByIdAndDelete(req.params.id);

    if (!motorcycle) {
      return res.status(404).send();
    }

    res.status(200).send(motorcycle);
  } catch (error) {
    res.status(500).send(error);
  }
};
