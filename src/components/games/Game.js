import React from 'react'
import { BASE_URL } from './../../route.consts'
import { Switch, Route, NavLink } from 'react-router-dom'
import GameNew from './GameNew'
import CharacterList from './../characters/CharacterList'

export default ({match}) => {
    return (
        <div className="component-game">
            <nav className="nav">
                <NavLink className="nav-link" activeClassName="active" to={`/games/${match.params.id}`}>Gra</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={`/games/${match.params.id}/characters`}>Postacie</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={`/games/${match.params.id}/items`}>Przedmioty</NavLink>
            </nav>
            <div>
                <Switch>
                    {/* edit characters, items or a game */}
                    <Route path={`${BASE_URL}games/:gameId/characters`} component={CharacterList} />
                    <Route path={`${BASE_URL}games/:gameId/items`} render={()=><div/>} />
                    <Route path={`${BASE_URL}games/:id`} component={GameNew} />
                </Switch>
            </div>
        </div>
    )
}