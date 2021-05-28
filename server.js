const express = require('express');
const dotEnv = require('dotenv').config();
const mongoose = require('mongoose');
const Transaction = require('./Models/transactionModel');

const app = express();
app.use(express.json());

mongoose.connect(process.env.ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

app.post('/', async (req, res) => {
  const { text, amount } = req.body;

  try {
    const newTrans = new Transaction({ text, amount });
    await newTrans.save();
    res.json('Transaction Added!');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
