const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  gender: String,
  productPurchased: String,
  title: String,
  description: String,
});

module.exports = mongoose.model('Ticket', ticketSchema);