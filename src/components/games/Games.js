import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import GamesList from './GamesList'
import Game from './Game'
import GameNew from './GameNew'

class Games extends React.Component{

    render() {
        return (
            <div>
                <Switch>
                    <Route path={`/games/new`} component={GameNew} />
                    <Route path={`/games/:id`} component={Game} />
                    <Route path={`/games`} component={GamesList} />
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth.auth
    }
}
export default connect(mapStateToProps)(Games);