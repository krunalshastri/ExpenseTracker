const Router = require('express').Router();
const Transaction = require('../Models/transactionModel');

Router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

Router.route('/').post(async (req, res) => {
  const { text, amount } = req.body;

  try {
    const newTrans = new Transaction({ text, amount });
    await newTrans.save();
    res.json(newTrans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

Router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  try {
    const transactions = await Transaction.findByIdAndDelete(id);
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

Router.route('/transactions/deleteAll').delete(async (req, res) => {
  try {
    await Transaction.deleteMany({}, function (err) {
      if (err) {
        console.log(err);
      } else {
        res.end('success');
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = Router;
