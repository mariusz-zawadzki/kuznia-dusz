import * as types from '../actions/types'

const initial = {
    ids: ['1', '2'],
    map: {
        '1': {
            "id": "1",
            "name": "game one"
        },
        '2': {
            "id": "2",
            "name": "game two"
        }
    }
};
export default (state = initial, action) => {
    switch (action.type) {
        case types.SAVE_GAME:
            const id = action.payload.id
            let ids = state.ids;
            let map = state.map;
            if (!map[id]) {
                ids = [...ids, id];
            }
            map[id] = action.payload;
            return { ids, map };
        default:
            return state;
    }
}