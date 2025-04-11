const User = require("../models/usermodel");

const createUser = async (userData) => {
  try {
    const { name, email, mobileNumber, password, avatar } = userData;

    const data = new User({
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
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

module.exports = {
  createUser,
  findUserByEmail,
};
