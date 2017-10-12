import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link, NavLink } from 'react-router-dom'
import './App.css';
import Games from './components/games/Games'
import SignOut from './components/auth/signout'
let COUNTER = 0;


const DUMMY = ({match })=>{
  return (<div>Dummy {COUNTER++} on path {match.path}</div>)
}

class App extends Component {

  componentWillMount(){

  }

  render() {
    return (

      <BrowserRouter>
      <div className="row">
        <div className="col">
        <nav className="nav-bar">
          This is top title bar.
          <Link to="/signin">Login/SignUp</Link>
          <Link to="/signout">Logout</Link>
        </nav>
        <nav className="nav-bar">
          This is menu bar.
          <NavLink to="/games">Gry</NavLink>
        </nav>
        <div >
        <Switch>
            <Route path={`/signout`} exact={true}  component={SignOut}  />
            <Route path={`/signin`} exact={true}  component={DUMMY}  />
            <Route path={`/games`} component={Games} />
        </Switch>
        </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
