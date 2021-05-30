import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  let [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  function handleChange(e) {
    if (e.target.type === 'text') setText(e.target.value);
    else if (e.target.type === 'number') setAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = uuid();
    amount = Number(amount);
    const profile = JSON.parse(localStorage.getItem('profile'));
    const googleId = profile.profile.googleId;
    console.log(googleId);
    addTransaction({ id, text, amount, googleId });
    setText('');
    setAmount('');
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label for='text'>Text</label>
          <input
            type='text'
            id='text'
            value={text}
            placeholder='Enter text...'
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div className='form-control'>
          <label for='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            value={amount}
            placeholder='Enter amount...'
            onChange={handleChange}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
};
