import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GamesList from './GamesList'
import Game from './Game'
import GameNew from './GameNew'

export default (props) => {
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