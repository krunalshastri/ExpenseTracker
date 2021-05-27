import React from 'react';

const Transaction = ({ trans }) => {
  return (
    <div>
      <li className={trans.amount < 0 ? 'minus' : 'plus'}>
        {trans.text}{' '}
        <span>
          {trans.amount >= 0 && '+'}
          {trans.amount.toFixed(2)}₹
        </span>
        <button className='delete-btn'>x</button>
      </li>
    </div>
  );
};

export default Transaction;
