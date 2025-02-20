const express = require("express");
const router = express.Router();

// store the controller methods
const {
  fetchGeoData,
  getDataById,
  getStoredData,
  createGeoData,
} = require("../controllers/geoController");

// defining endpoints

// fetching external data from NASA api
router.get("/fetch", fetchGeoData);
// retrieve the stored data from mongoDB (w/ query filters)
router.get("/", getStoredData);
// retrieve specific record via mongoDB ID
router.get("/:id", getDataById);
// create new geo data
router.post("/", createGeoData);

module.exports = router;
