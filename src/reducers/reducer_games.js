import * as types from '../actions/types'

const initial = {
    ids: [],
    map: {}
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