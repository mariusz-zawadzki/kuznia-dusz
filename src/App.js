import React, { Component } from 'react';
import { Route, /*Switch*/ } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Main from './components/main'
const BASE_URL =process.env.PUBLIC_URL+"/";
class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
            <Route path={BASE_URL+"login"} exact={true}  component={Login}  />
            <Route path={BASE_URL+""} exact={true} component={Main} />
      </div>
    );
  }
}

export default App;
