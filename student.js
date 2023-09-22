
const mongoose = require('mongoose');

let studentschema = new mongoose.Schema({
  name : String,
  password : String,
  email : String,
  grid : Number
});

let student = mongoose.model("studentdata",studentschema);

module.exports = student 