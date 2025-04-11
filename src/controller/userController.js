const userService = require("../services/user_services");

const createUser = async (req, res,next) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ message: `User Created Successfully`, user });
  } catch (error) {
    next(error); 
  }
};

const getUsers = (req, res) => {
  res.json({ message: "All users ✅" });
};

module.exports = {
  createUser,
  getUsers,
};
