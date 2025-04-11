const userRepository = require("../repository/userRepository");
const AppError= require("../utils/error_instance")
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

module.exports = {
  registerUser,
};
