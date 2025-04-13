const { registerUser, getUserByEmail,getAllUsers } = require("../services/user_services");

const createUser = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: `User Created Successfully`, user });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res,next) => {
  try {
    const allUsers = await getAllUsers();

    res.status(200).json({
      status: "success",
      message: "User fetched  successfully",
      data: allUsers, // includes user info & token
    });
  } catch (error) {
    next(error); // Let global error handler handle it
  }
};

const login = async (req, res, next) => {
  try {
    const userWithToken = await getUserByEmail(req.body);

    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: userWithToken, // includes user info & token
    });
  } catch (error) {
    next(error); // Let global error handler handle it
  }
};

module.exports = {
  createUser,
  getUsers,
  login,
};
