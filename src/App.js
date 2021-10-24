import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Route path="/add" component={ Add } />
          <Route path="/edit/:id" component={ Edit } />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ LogIn } />
          <Route path="/reg" component={ Reg } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
