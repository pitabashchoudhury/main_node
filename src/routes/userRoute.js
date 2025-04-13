const express = require("express");
const router = express.Router();
const { getUsers, createUser ,login} = require("../controller/userController");
const authenticateToken = require("../middleware/authenticateToken")

router.get("/",authenticateToken, getUsers);
router.post("/", createUser);
router.post("/login",login)

module.exports = router;
