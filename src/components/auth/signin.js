import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component {

  onClick(){
    this.props.signInUser();
  }

  render() {
    return <div>
      <button onClick={this.onClick.bind(this)} className="btn btn-primary">Zaloguj przez Google.</button>
    </div>;
  }
}

export default connect(null, actions)(SignIn);