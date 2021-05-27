import React, { useState } from 'react';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.type === 'text') setText(e.target.value);
    else if (e.target.type === 'number') setAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
