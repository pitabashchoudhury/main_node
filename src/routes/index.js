const express = require("express");
const router = express.Router();

// Import all individual route files
const userRoutes = require("./userRoute");
const categoryRoutes = require("./categoriesRoute"); // example

// Mount them
router.use("/user", userRoutes);
router.use("/categories", categoryRoutes); 

module.exports = router;
