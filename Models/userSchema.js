const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    trime: true,
  },
  name: {
    type: String,
    required: true,
    trime: true,
  },
  category: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//model

const users = new mongoose.model("users", userSchema);

module.exports = users;
