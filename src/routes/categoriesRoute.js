const express = require("express");
const router = express.Router();
const { addCategory, getCategories, deleteCategory } = require("../controller/categoriesController");
const authenticateToken = require("../middleware/authenticateToken");

router.get("/",  getCategories);
router.post("/add",authenticateToken, addCategory);
router.post("/delete",authenticateToken, deleteCategory);
// router.post("/update", login);

module.exports = router;
