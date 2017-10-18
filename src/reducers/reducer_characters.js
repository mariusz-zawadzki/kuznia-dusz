import * as types from '../actions/types'

const initial = {
};
export default (state = initial, action) => {
    switch (action.type) {
        case types.SAVE_CHARACTER:
            const gameId = action.payload.gameId;
            const characters = {...state};
            const id = action.payload.id
            const game = characters[gameId] || {};
            let ids = game.ids || [];
            let map = {...game.map};
            if (!map[id]) {
                ids = [...ids, id];
            }
            map[id] = action.payload;
            characters[gameId] = {ids,map}
            return characters;
        default:
            return state;
    }
}