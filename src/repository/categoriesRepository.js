const Category = require("../models/categorymodel");

const createCategory = async (categoryData) => {
  try {
    const { label, imageUrl } = categoryData;

    const data = new Category({
      label: label,
      imageUrl: imageUrl,

      active: 1,
    });

    return await Category.create(data);
  } catch (error) {
    throw new Error("SomeThing went wrong .. please try again");
  }
};

// const findUserByEmail = async (email) => {
//   return await User.findOne({ email });
// };

const getCategories = async () => {
  try {
    const categories = await Category.find();

    if (!categories || categories.length === 0) {
      throw new AppError("No Categories found", 404);
    }

    return categories;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCategory,
  //findUserByEmail,
  getCategories,
};
