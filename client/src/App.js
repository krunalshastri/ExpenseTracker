import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/expense-tracker' component={ExpenseTracker} />
      </Switch>
    </Router>
  );
}

export default App;
