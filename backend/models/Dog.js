// models/Dog.js

const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String },
  breed: { type: String },
  color: { type: String },
  size: { type: String },
  markings: { type: String },
  gender: { type: String, required: true },
  image: { type: String, required: true },
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
