const mongoose = require('mongoose');

//Schema
const transactionSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Model
const Transaction = mongoose.model('transactions', transactionSchema);

module.exports = Transaction;
