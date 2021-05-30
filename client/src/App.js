import { Fragment } from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/expense-tracker' component={ExpenseTracker} />
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;
