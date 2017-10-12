import React from 'react'
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
                    <Route path={`/games/:gameId/characters`} component={CharacterList} />
                    <Route path={`/games/:gameId/items`} render={()=><div/>} />
                    <Route path={`/games/:id`} component={GameNew} />
                </Switch>
            </div>
        </div>
    )
}