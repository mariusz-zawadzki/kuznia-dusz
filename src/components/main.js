import React, {Component} from 'react';
import {connect} from 'react-redux'

import SideBar from './navbar/side-bar'
import Content from './content'
import Demo from './demo'
import TopNavBar from './navbar/top-bar'
import './navbar.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import CharacterEditor from './character/editor'
import CharacterController from './character/characterController'
import CharacterListDisplay from './character/characterListDisplay'
import Logout from './login/logout'
const BASE_URL = process.env.PUBLIC_URL+"/";


class Main extends Component {

    componentDidUpdate() {
        if (!this.props.loggedIn) {
            console.log('pushing to login')
            this.props.history.push(BASE_URL+"login")
        }
    }

    componentWillMount() {
        if (!this.props.loggedIn) {
            console.log('pushing to login')
            this.props.history.push(BASE_URL+"login")
        }
    }

    render() {
        const BASE_PATH = this.props.match.path;
        const props = this.props;
        return (
            <BrowserRouter>
            <div className="container">
                <TopNavBar/>
                <div className="container-fluid">
                    <div className="row">
                    <Route component={SideBar} />
                        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                            <Switch>
                                <Route path={BASE_PATH+"postacie/:id"} exact={false} component={CharacterController}/>
                                <Route path={BASE_PATH+"postacie"} exact={false} component={CharacterListDisplay}/>
                                <Route path={BASE_PATH+"logout"} exact={false} component={Logout}/>
                                <Route path={BASE_PATH} exact={false} component={Demo}/>
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
            </BrowserRouter>
        );
    };
}

function mapStateToProps(state) {
    return {loggedIn: state.loggedIn}
}

export default connect(mapStateToProps)(Main);