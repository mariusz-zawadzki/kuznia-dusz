import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {BASE_URL} from '../../route.consts'


class GamesList extends Component{

    render(){
        let games = this.props.games.map((game)=>{
            return (
                <li key={game.id} className="list-item">
                    <Link to={`${BASE_URL}games/${game.id}`}>{game.name}</Link>
                </li>
            )
        })
        return (
            <div className="games-list">
                <Link className="games-new" to={`${BASE_URL}games/new`}>Add new</Link>
                <ul>
                    {games}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        games: state.games
    }
}

export const GameListRaw = GamesList;
export default connect(mapStateToProps)(GamesList);