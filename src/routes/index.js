const express = require("express");
const router = express.Router();

// Import all individual route files
const userRoutes = require("./userRoute");
//const postRoutes = require("./postRoutes"); // example

// Mount them
router.use("/user", userRoutes);
//router.use("/posts", postRoutes); // if you have more

module.exports = router;
