const express = require("express");
const morgan = require("morgan");
const routeHandler = require("./routes");
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routeHandler);

module.exports = app;
