import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount(){
    if(this.props.auth){
      this.props.history.push('/games');
    }
  }

  onClick(){
    console.log("klik")
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