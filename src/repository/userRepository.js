const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");

const createUser = async (userData) => {
  try {
    const { name, email, mobileNumber, password, avatar } = userData;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const data = new User({
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      password: hashedPassword,
      active: 0,
      avatar: avatar || "",
    });

    return await User.create(data);
  } catch (error) {
    throw new Error("SomeThing went wrong .. please try again");
  }
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUsers = async () => {
  try {
    const existingUsers = await User.find({}, "-password");

    if (!existingUsers || existingUsers.length === 0) {
      throw new AppError("No users found", 404);
    }

    return existingUsers;
  } catch (error) {
    throw error; // Let the controller or middleware handle the error
  }
};

module.exports = {
  createUser,
  findUserByEmail,
  getUsers,
};
