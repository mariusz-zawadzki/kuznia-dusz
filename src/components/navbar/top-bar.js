import React from 'react';

const  TopNavBar = (props) => {
    let name = "";
    if(localStorage.getItem("auth")){
        let profile = JSON.parse(localStorage.getItem('auth'));
        name = "Witaj: "+ profile.name;
    }
    return (<nav>
        {name}
    </nav>)
};
const TopNavBarTmp= (props) =>{
    return(
        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#as">Dashboard</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#a">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#b">Settings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#c">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#d">Help</a>
                </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    )
}

export default TopNavBar;