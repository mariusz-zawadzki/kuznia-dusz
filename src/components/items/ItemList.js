import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class ItemList extends Component {

    render() {
        let { match, items } = this.props;
        let itemsList = items.map((item) => {
            return (
                <li key={item.id} className="list-group-item">
                    <Link to={`/games/${match.params.gameId}/items/${item.id}`}>{item.name}</Link>
                </li>
            )
        })
        return (
            <div>
                <Link className="character-new" to={`/games/${match.params.gameId}/items/new`}>
                    <button className="btn btn-primary">
                        Dodaj przedmiot
                </button>
                </Link>
                <ul className="items-list list-group">
                    {itemsList}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const gameId = ownProps.match.params.gameId;
    const gameItems = state.items[gameId] || { ids: [], map: {} };
    return {
        items: gameItems.ids.map((id) => gameItems.map[id])
    }
}

export const ItemListRaw = ItemList;
export default connect(mapStateToProps)(ItemList);