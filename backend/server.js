const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const volRoutes = require("./routes/volRoutes");
const beneficiaryRoutes = require("./routes/beneficiaryRoutes");
const assignRoutes = require("./routes/assignRoutes");

require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGOURI = process.env.MONGOURI;

// Connect to MongoDB
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
  require('./seed');
  require('./seed2')
  require('./seed3')
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/", userRoutes);
app.use("/api/volunteer/", volRoutes);
app.use("/api/beneficiary/", beneficiaryRoutes);
app.use("/api/assignments/", assignRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
