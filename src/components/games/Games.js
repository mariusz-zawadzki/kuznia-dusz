import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BASE_URL } from './../../route.consts'
import GamesList from './GamesList'
import Game from './Game'
import GameNew from './GameNew'

export default (props) => {
    return (
        <div>
            <Switch>
                <Route path={`${BASE_URL}games/new`} component={GameNew} />
                <Route path={`${BASE_URL}games/:id`} component={Game} />
                <Route path={`${BASE_URL}games`} component={GamesList} />
            </Switch>
        </div>
    );
}