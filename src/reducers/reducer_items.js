import * as types from '../actions/types'

const initial = {
    // "0EusMqJ3veoyImGhrET3":{
    //     ids: ["0"],
    //     map: {
    //         "0":{
    //             "id":"0",
    //             "name":"Toporek",
    //             "description":"Bardzo magidzny toporek",
    //             "image":null
    //         }
    //     }
    // }
};
export default (state = initial, action) => {
    switch (action.type) {
        case types.SAVE_ITEM:
            const gameId = action.payload.gameId;
            const items = {...state};
            const id = action.payload.id
            const game = items[gameId] || {};
            let ids = game.ids || [];
            let map = {...game.map};
            if (!map[id]) {
                ids = [...ids, id];
            }
            map[id] = action.payload;
            items[gameId] = {ids,map}
            console.log(items)
            return items;
        default:
            return state;
    }
}