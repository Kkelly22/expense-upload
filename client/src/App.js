import React from 'react';
import logo from './logo.svg';
import './App.css';

import ExpensesContainer from './containers/ExpensesContainer';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch id="routes">
        <Route exact path='/' component={ExpensesContainer} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
