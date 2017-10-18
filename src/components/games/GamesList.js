import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class GamesList extends Component {

    render() {
        let games = this.props.games.map((game) => {
            return (
                <li key={game.id} className="list-group-item">
                    <Link to={`/games/${game.id}/characters`}>{game.name}</Link>
                </li>
            )
        })
        return (
            <div className="games-list row">
                
                <div className="col-2">
                </div>
                <div className="col-8">
                <Link className="games-new" to={`/games/new`}>
                    <button className="btn btn-primary">
                        Dodaj grę
                    </button>
                </Link>
                <ul className="list-group">
                    {games}
                </ul>
                </div>
                <div className="col-2">
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        games: state.games.ids.map((id) => state.games.map[id])
    }
}

export const GameListRaw = GamesList;
export default connect(mapStateToProps)(GamesList);