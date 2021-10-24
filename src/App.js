import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Add } from './components/Add';
import { Edit } from './components/Edit';
import { Reg } from './components/Reg';
import { LogIn } from './components/LogIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/add" component={ Add } />
          <Route exact path="/edit/:id" component={ Edit } />
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ LogIn } />
          <Route exact path="/reg" component={ Reg } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
