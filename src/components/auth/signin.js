import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    const {history} = this.props;
    this.props.signInUser((user)=>{
        history.push('/games');
    });
  }

  render() {
    return <div>
      <button onClick={this.onClick} className="btn btn-primary">Zaloguj przez Google.</button>
    </div>;
  }
}

function mapStateToProps(state){
  return {
      auth: state.auth.auth
  }
}
export default connect(mapStateToProps, actions)(SignIn);