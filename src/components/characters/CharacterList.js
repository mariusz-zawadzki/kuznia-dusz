import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {BASE_URL} from '../../route.consts'


class CharacterList extends Component{

    render(){
        let {match, characters} = this.props;
        let charactersList = characters.map((character)=>{
            return (
                <li key={character.id} className="list-item">
                    <Link to={`${BASE_URL}games/${match.params.gameId}/characters/${character.id}`}>{character.name}</Link>
                </li>
            )
        })
        return (
            <div>
                <Link className="character-new" to={`${BASE_URL}games/${match.params.gameId}/characters/new`}>Add new</Link>
                <ul className="characters-list">
                    {charactersList}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharacterList);