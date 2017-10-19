import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import GameNew from './GameNew'
import CharacterList from './../characters/CharacterList'
import CharacterNew from './../characters/CharacterNew'
import ItemList from './../items/ItemList'
import ItemNew from './../items/ItemNew'

export default ({ match }) => {
    return (
        <div className="component-game">
            <nav className="nav">
                <NavLink exact className="nav-link" activeClassName="active" to={`/games/${match.params.id}`}>Gra</NavLink>
                <NavLink exact className="nav-link" activeClassName="active" to={`/games/${match.params.id}/characters`}>Postacie</NavLink>
                <NavLink exact className="nav-link" activeClassName="active" to={`/games/${match.params.id}/items`}>Przedmioty</NavLink>
                {/* <NavLink className="nav-link" activeClassName="active" to={`/games/${match.params.id}/items`}>Przedmioty</NavLink> */}
            </nav>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <Switch>
                        {/* edit characters, items or a game */}
                        <Route path={`/games/:gameId/items/:id`} component={ItemNew} />
                        <Route path={`/games/:gameId/items`} component={ItemList} />
                        <Route path={`/games/:gameId/characters/:id`} component={CharacterNew} />
                        <Route path={`/games/:gameId/characters`} component={CharacterList} />
                        <Route path={`/games/:gameId/items`} render={() => <div />} />
                        {/* <Route path={`/games/:gameId/items/:id`} component={CharacterNew} /> */}
                        <Route path={`/games/:id`} component={GameNew} />
                    </Switch>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    )
}