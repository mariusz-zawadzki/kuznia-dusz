import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'
const BASE_URL = process.env.PUBLIC_URL+"/";


const SideBar = (props) =>{

    function getActiveClass(url, className){
        return props.location.pathname === url?className:'';
    }
    const ActivableLink = (props) =>{
        const URL = props.to;
        return (
            <li className="nav-item">
             <Link className={"nav-link " +getActiveClass(URL,"active") } to={URL}>{props.children}</Link>
            </li>
        );
    }

    return(
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
            <ul className="nav nav-pills flex-column">
                    <ActivableLink to={BASE_URL}>Main</ActivableLink>
                    <ActivableLink to={BASE_URL+"postacie"}>Postacie</ActivableLink>
                    <ActivableLink to={BASE_URL+"logout"}>Wyloguj</ActivableLink>
                {/*<li className="nav-item">
                    <a className="nav-link" href="#f">Reports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#g">Analytics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#h">Export</a>
                </li>*/}
            </ul>

            {/*<ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#i">Nav item</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#j">Nav item again</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#k">One more nav</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#l">Another nav item</a>
                </li>
            </ul>

            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#m">Nav item again</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#n">One more nav</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#o">Another nav item</a>
                </li>
            </ul>*/}
        </nav>

    )
}

export default connect(null, actions)(SideBar);