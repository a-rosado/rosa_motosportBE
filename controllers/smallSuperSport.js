const SmallSuperSport = require('../models/smallSuperSport');

// Create a new motorcycle
exports.createMotorcycle = async (req, res) => {
  try {
    const newMotorcycle = new SmallSuperSport(req.body);
    const result = await newMotorcycle.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a list of all motorcycles
exports.getMotorcycles = async (req, res) => {
  try {
    const motorcycles = await SmallSuperSport.find();
    console.log("Retrieved motorcycles:", motorcycles);
    if (motorcycles.length === 0) {
      // This helps to identify if the query was successful but returned no results
      console.log("No motorcycles found.");
      return res.status(404).send({ message: "No motorcycles found." });
    }
    res.status(200).send(motorcycles);
  } catch (error) {
    console.error("Error fetching motorcycles:", error);
    res.status(500).send({ message: "Error fetching motorcycles", error: error.message });
  }
};

// Get a single motorcycle by ID
exports.getMotorcycleById = async (req, res) => {
  try {
    const motorcycle = await SmallSuperSport.findById(req.params.id);
    if (!motorcycle) {
      return res.status(404).send();
    }
    res.status(200).send(motorcycle);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a motorcycle by ID
exports.updateMotorcycle = async (req, res) => {
  try {
    const motorcycle = await SmallSuperSport.findByIdAndUpdate(req.params.id, req.body, {
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

// Delete a motorcycle by ID
exports.deleteMotorcycle = async (req, res) => {
  try {
    const motorcycle = await SmallSuperSport.findByIdAndDelete(req.params.id);

    if (!motorcycle) {
      return res.status(404).send();
    }

    res.status(200).send(motorcycle);
  } catch (error) {
    res.status(500).send(error);
  }
};
