import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
