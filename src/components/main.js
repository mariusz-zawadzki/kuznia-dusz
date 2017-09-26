import React, {Component} from 'react';
import {connect} from 'react-redux'

import SideBar from './navbar/side-bar'
import Content from './content'
import Demo from './demo'
import TopNavBar from './navbar/top-bar'
import './navbar.css'
import { Route, Switch } from 'react-router-dom'
import CharacterEditor from './character/editor'
import CharacterController from './character/characterController'
import CharacterListDisplay from './character/characterListDisplay'
const BASE_URL = process.env.PUBLIC_URL+"/";


class Main extends Component {

    componentDidUpdate() {
        if (!this.props.loggedIn) {
            this.history.push(BASE_URL+"login")
        }
    }

    componentWillMount() {
        if (!this.props.loggedIn) {
            this.props.history.push(BASE_URL+"login")
        }
    }

    render() {
        const BASE_PATH = this.props.match.path;
        return (
            <div className="container">
                <TopNavBar/>
                <div className="container-fluid">
                    <div className="row">
                        <SideBar history={this.props.history}/>
                        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                            <Switch>
                                <Route path={BASE_PATH+"postacie/:id"} exact={false} component={CharacterController}/>
                                <Route path={BASE_PATH+"postacie"} exact={false} component={CharacterListDisplay}/>
                                <Route path={BASE_PATH} exact={false} component={Demo}/>
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {loggedIn: state.loggedIn}
}

export default connect(mapStateToProps)(Main);