const MiddleSuperSport = require('../models/MiddleSuperSport');

exports.createMotorcycle = async (req, res) => {
  try {
    const newMotorcycle = new MiddleSuperSport(req.body);
    const result = await newMotorcycle.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getMotorcycles = async (req, res) => {
  try {
    const motorcycles = await MiddleSuperSport.find(); // This will fetch all documents from the MiddleSuperSport collection
    console.log("Retrieved motorcycles:", motorcycles);
    if (motorcycles.length === 0) {
      console.log("No motorcycles found.");
      return res.status(404).send({ message: "No motorcycles found." }); // Send a 404 if no documents are found
    }
    res.status(200).send(motorcycles); // Send back the list of motorcycles
  } catch (error) {
    console.error("Error fetching motorcycles:", error);
    res.status(500).send({ message: "Error fetching motorcycles", error: error.message }); // Send a 500 if there's a server error
  }
};


exports.getMotorcycleById = async (req, res) => {
  try {
    const motorcycle = await MiddleSuperSport.findById(req.params.id);
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
    const motorcycle = await MiddleSuperSport.findByIdAndUpdate(req.params.id, req.body, {
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
    const motorcycle = await MiddleSuperSport.findByIdAndDelete(req.params.id);

    if (!motorcycle) {
      return res.status(404).send();
    }

    res.status(200).send(motorcycle);
  } catch (error) {
    res.status(500).send(error);
  }
};
