const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name required'],
    unique: true,
  },
    email: {
    type: String,
    required: [true, 'email required'],
    unique: true,
  },
  country: {
    type: String,
    required: [true, 'country required'],
    unique: true,
  },
})
const Info = mongoose.model('Info', infoSchema);

module.exports = Info;