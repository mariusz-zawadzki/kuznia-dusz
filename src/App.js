import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import Games from './components/games/Games'
import SignOut from './components/auth/signout'
import SignIn from './components/auth/signin'
import firebase from './firebase'
import * as actions from './actions/index'


class App extends Component {
  componentWillMount() {
    if (!this.props.auth) {
      let { history, location } = this.props;
      firebase.auth().onAuthStateChanged((user) => {
        if (!user && location.pathname !== '/signout') {
          history.push('/signin')
        }
        else if (user) {
          localStorage.setItem('authId', user.uid);
          // history.push('/games')
        }
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="navbar">
            <nav className="nav nav-left">
              <NavLink className="nav-link" activeClassName="active" to="/games">Gry</NavLink>
            </nav>
            <nav className="nav nav-right">
              <NavLink className="nav-link" activeClassName="active" to="/signin">Login/SignUp</NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/signout">Logout</NavLink>
            </nav>
          </div>
          <div >
            <Switch>
              <Route path={`/signout`} exact={true} component={SignOut} />
              <Route path={`/signin`} exact={true} component={SignIn} />
              <Route path={`/games`} component={Games} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
