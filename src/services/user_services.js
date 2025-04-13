const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userRepository = require("../repository/userRepository");
const AppError = require("../utils/error_instance");

const registerUser = async (data) => {
  try {
    const existingUser = await userRepository.findUserByEmail(data.email);
    if (existingUser) {
      throw new AppError("User already exists", 400);
    }

    const newUser = await userRepository.createUser(data);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (data) => {
  try {
    const existingUser = await userRepository.findUserByEmail(data.email);

    if (!existingUser) {
      throw new AppError("User not found", 404);
    }

    const passwordMatch = bcrypt.compareSync(
      data.password,
      existingUser.password
    );

    if (!passwordMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return { existingUser, token };
  } catch (error) {
    // rethrow the error so the controller can catch it
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    return await userRepository.getUsers();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerUser,
  getUserByEmail,
  getAllUsers,
};
