import React, {Component } from 'react';
import { connect } from 'react-redux'
import NavBar from './navbar'
class Main extends Component {

    componentDidUpdate(){
        if(!this.props.loggedIn){
            this.history.push("/login")
        }
    }

    componentWillMount(){
        if(!this.props.loggedIn){
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <div className="main">
            <NavBar />
                Main page
            </div>
        );
    };
}
function mapStateToProps(state) {
    return { loggedIn: state.loggedIn }
}

export default connect (mapStateToProps)(Main);