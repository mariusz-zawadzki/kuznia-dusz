import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';

class App extends Component {
  componentWillMount() {
    if (!this.props.auth) {
      let { history, location } = this.props;
      this.props.authenticate({history,location});
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
              <Route path={`/signout`} exact={true} component={this.props.components.SignOut} />
              <Route path={`/signin`} exact={true} component={this.props.components.SignIn} />
              <Route path={`/games`} component={this.props.components.Games} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
