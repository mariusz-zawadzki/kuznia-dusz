import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class CharacterList extends Component {

    render() {
        let { match, characters } = this.props;
        let charactersList = characters.map((character) => {
            return (
                <li key={character.id} className="list-group-item">
                    <Link to={`/games/${match.params.gameId}/characters/${character.id}`}>{character.name}</Link>
                </li>
            )
        })
        return (
            <div>
                <Link className="character-new" to={`/games/${match.params.gameId}/characters/new`}>
                    <button className="btn btn-primary">
                        Dodaj postać
                </button>
                </Link>
                <ul className="characters-list list-group">
                    {charactersList}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const gameId = ownProps.match.params.gameId;
    const gameCharacters = state.characters[gameId] || { ids: [], map: {} };
    return {
        characters: gameCharacters.ids.map((id) => gameCharacters.map[id])
    }
}

export const CharacterListRaw = CharacterList;
export default connect(mapStateToProps)(CharacterList);