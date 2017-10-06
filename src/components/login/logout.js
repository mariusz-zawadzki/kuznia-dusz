import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class Logout extends Component {

    componentDidMount(){
        this.props.logout();
    }

    render(){
        return <div/>;
    }

}

export default connect(null, actions)(Logout);