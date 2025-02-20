const API_URL = process.env.NASA_API_LINK;
const GeoData = require("../models/geoModel.js");

// GET/api/geo-data >> accept params for specific location, calls geospatial API, parses response and returns value
exports.fetchGeoData = async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error fetching API data:", error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// GET/api/geo-data/:id  >> retrieve specific data by mongo ID
exports.getDataById = async (req, res) => {
  try {
    const { id } = req.params; // refers to :id from url
    const doc = await GeoData.findById(id);
    // handle if ID is not found
    if (!doc) {
      return res.status(404).json({
        success: false,
        message: "Geo event not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: doc,
    });
  } catch (error) {
    console.error("Error retrieving Geo event data by ID:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET/api/geo-data >> retrieves stored data in mongoDB, implement optional query params for filtering (by name)
exports.getStoredData = async (req, res) => {
  try {
    // parse query params for filtering purposes
    const { name, startDate, endDate, longitude, latitude } = req.query;
    // empty object
    const filter = {};

    // filtering by name logic
    if (name) {
      filter.name = new RegExp(name, "i");
    }

    //filtering by date
    // gte = greater than, lte = less than
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    // filtering by location
    if (longitude && latitude) {
      filter["location.longitude"] = parseFloat(longitude);
      filter["location.latitude"] = parseFloat(latitude);
    }

    // retrieves all the events that match the name
    const data = await GeoData.find(filter);

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    console.error("Error retrieving data from MongoDB:", error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// POST/api/geo-data >> accepts data in request body, saves data to mongoDB, returns success message with saved data ID
exports.createGeoData = async (req, res) => {
  try {
    const newData = await GeoData.create(req.body);
    return res.status(201).json({
      success: true,
      message: "New Geo Event saved successfully.",
      data: newData,
    });
  } catch (error) {
    console.error("Error creating Geo event:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
