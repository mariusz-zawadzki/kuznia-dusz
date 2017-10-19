
import firebase from './../firebase'
import fb from 'firebase'
import * as types from './types'


export function signOutUser() {
    return (dispatch, getState) => {
        firebase.auth().signOut()
        .then(() => {
            let listeners = getState().listeners || [];
            listeners.forEach((e)=>e());
            dispatch(
                {
                    type: types.REMOVE_LISTENERS
                }
            );
            dispatch(
                {
                    type: types.SIGN_OUT
                }
            );
        })
    }
}

export function signInUser(callback) {
    return (dispatch) => {
        let provider = new fb.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((user) => {
            if (user) {
                callback(user)
                dispatch(
                    {
                        type: types.SIGN_IN,
                        payload: user.user.uid
                    }
                );
            }
        });
    }
}

export function saveItem(itemData) {

    return (dispatch, getState) => {
        const item = { ...itemData };


        const newItem = firebase
            .firestore()
            .collection(`games/${item.gameId}/items`)
            .doc(item.id);
        item.id = newItem.id;
        newItem
            .set(item)
            .then(() => {
                dispatch(
                    {
                        type: types.SAVE_ITEM,
                        payload: item
                    }
                );
            })
    };
}
export function saveCharacter(characterData) {

    return (dispatch, getState) => {
        const character = { ...characterData };


        const newCharacter = firebase.firestore().collection(`games/${character.gameId}/characters`).doc(character.id);
        character.id = newCharacter.id;

        newCharacter
            .set(character)
            .then(() => {
                dispatch(
                    {
                        type: types.SAVE_CHARACTER,
                        payload: character
                    }
                );
            })
    };
}

export function saveGame(gameData) {
    return (dispatch, getState) => {
        const game = { ...gameData };
        const newGame = firebase.firestore().collection("games").doc(game.id);
        if (game.owners === undefined) {
            let currentUser = localStorage.getItem('authId');
            let owners = {}
            owners[currentUser] = "ADMIN";
            game.owners = owners;
        }
        game.id = newGame.id;
        newGame
            .set(game)
            .then(function (doc) {
                dispatch(
                    {
                        type: types.SAVE_GAME,
                        payload: game
                    }
                );
            })
            .catch((e) => {
                console.log("ERROR", e)
            })
    }
}