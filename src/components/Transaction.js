import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ trans }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  function handleClick(id) {
    deleteTransaction(id);
  }

  return (
    <div>
      <li className={trans.amount < 0 ? 'minus' : 'plus'}>
        {trans.text}{' '}
        <span>
          {trans.amount >= 0 && '+'}
          {trans.amount.toFixed(2)}₹
        </span>
        <button className='delete-btn' onClick={() => handleClick(trans.id)}>
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
