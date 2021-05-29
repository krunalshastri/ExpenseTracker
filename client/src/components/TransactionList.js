import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

export const TransactionList = () => {
  let { transactions, clearAll, getAll } = useContext(GlobalContext);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <div className='clear'>
        <h3>History</h3>
        <button onClick={() => clearAll()}>Clear All</button>
      </div>
      <ul id='list' className='list'>
        {transactions.map((trans) => (
          <Transaction trans={trans} />
        ))}
      </ul>
    </div>
  );
};
