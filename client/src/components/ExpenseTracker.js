import React from 'react';
import { AddTransaction } from './AddTransaction';
import { Balance } from './Balance';
import { Header } from './Header';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
const ExpenseTracker = () => {
  return (
    <div className='landing'>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

export default ExpenseTracker;
