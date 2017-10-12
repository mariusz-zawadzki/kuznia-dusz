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
            <div>
                <Link className="game=new" to={`${BASE_URL}games/new`}>Add new</Link>
                <ul className="game-list">
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

export default connect(mapStateToProps)(GamesList);