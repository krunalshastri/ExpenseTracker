import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {
  const { logout, isLogged } = useContext(GlobalContext);

  console.log(isLogged);

  if (!isLogged) {
    return <Redirect to='/' />;
  }

  function handleClick() {
    localStorage.clear();
    logout();
  }

  let name = JSON.parse(localStorage.getItem('profile')).profile.name;

  return (
    <div>
      <h1>Welcome, {name}!! </h1>
      <div className='logout'>
        <h2>Expense Tracker</h2>
        <button onClick={handleClick}>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout </span>{' '}
        </button>
      </div>
    </div>
  );
};
