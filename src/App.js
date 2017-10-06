import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
const BASE_URL =process.env.PUBLIC_URL+"/";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
            <Route path={BASE_URL+"login"} exact={true}  component={Component}  />
            <Route path={BASE_URL+""} exact={false} component={Component} />
        </Switch>
      </div>
    );
  }
}

export default App;
