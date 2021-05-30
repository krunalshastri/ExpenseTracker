import React from 'react';

export const Header = () => {
  let name = JSON.parse(localStorage.getItem('profile')).profile.name;
  return (
    <div>
      <h1>Welcome, {name} </h1>
      <h2>Expense Tracker</h2>
    </div>
  );
};
