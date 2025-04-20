const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
    label: {
      type: String,
      required: true,
    },

    

    active: {
      type: Number,
      required: true,
    },

   
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
