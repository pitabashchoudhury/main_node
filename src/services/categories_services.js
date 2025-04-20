const categoryRepository = require("../repository/categoriesRepository");
const AppError = require("../utils/error_instance");

const fetchCategories = async () => {
  try {
    const existingUser = await categoryRepository.getCategories();
    if (existingUser) {
      throw new AppError("Categories not found", 404);
    }
    
    return existingUser;
  } catch (error) {
    throw error;
  }
};

const addCategory = async (data) => {
  try {
    // const existingUser = await userRepository.findUserByEmail(data.email);
    // return { existingUser, token };
  } catch (error) {
    // rethrow the error so the controller can catch it
    throw error;
  }
};

const deleteCategory = async (data) => {
  try {
    //return await userRepository.getUsers();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchCategories,
  addCategory,
  deleteCategory,
};
