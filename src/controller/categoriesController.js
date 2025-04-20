const {
    fetchCategories,
    getUserByEmail,
    getAllUsers,
  } = require("../services/categories_services");
  
  const addCategory = async (req, res, next) => {
    try {
    //  const user = await registerUser(req.body);
      res.status(201).json({ message: `Category Created Successfully`, user });
    } catch (error) {
      next(error);
    }
  };
  
  const getCategories = async (req, res, next) => {
    try {
      const allCategories = await fetchCategories();
  
      res.status(200).json({
        status: "success",
        message: "Categories fetched  successfully",
        allCategories
      });
    } catch (error) {
      next(error); // Let global error handler handle it
    }
  };
  
  const deleteCategory = async (req, res, next) => {
    try {
    //  const userWithToken = await getUserByEmail(req.body);
  
      res.status(200).json({
        status: "success",
        message: "Category deleted  successfully",
     //   userWithToken,
      });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = {
    addCategory,
    getCategories,
    deleteCategory,
  };
  