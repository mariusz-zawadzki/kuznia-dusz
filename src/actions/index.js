
import firebase from './../firebase'
import fb from 'firebase'
import * as types from './types'


export function signOutUser() {
    return (dispatch, getState) => {
        firebase.auth().signOut()
            .then(() => {
                let listeners = getState().listeners || [];
                listeners.forEach((e) => e());
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
        console.log(typeof item.image)
        console.log(item);
        let storageRef = firebase.storage().ref();
        // let mountainsRef = 
        storageRef.child('/games/' + item.gameId + '/image.jpg')
            .put(item.image[0])
            .then((snapshot) => {
                console.log(snapshot);
                const newItem = firebase
                    .firestore()
                    .collection(`games/${item.gameId}/items`)
                    .doc(item.id);
                item.id = newItem.id;
                item.image = {
                    id:snapshot.metadata.fullPath,
                    link: snapshot.downloadURL
                }
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
                    .catch((e) => {
                        console.log("ERROR saving item", e)
                    })
                debugger;
                // snapshot: UploadTaskSnapshot
                // bytesTransferred
                // :
                // 238032
                // downloadURL
                // :
                // "https://firebasestorage.googleapis.com/v0/b/kuznia-dusz.appspot.com/o/games%2F0EusMqJ3veoyImGhrET3%2Fimage.jpg?alt=media&token=91bcf3d3-78b4-458a-aa91-893345fc680d"
                // metadata
                // :
                // bucket
                // :
                // "kuznia-dusz.appspot.com"
                // cacheControl
                // :
                // undefined
                // contentDisposition
                // :
                // "inline; filename*=utf-8''image.jpg"
                // contentEncoding
                // :
                // "identity"
                // contentLanguage
                // :
                // undefined
                // contentType
                // :
                // "image/jpeg"
                // customMetadata
                // :
                // undefined
                // downloadURLs
                // :
                // Array(1)
                // 0
                // :
                // "https://firebasestorage.googleapis.com/v0/b/kuznia-dusz.appspot.com/o/games%2F0EusMqJ3veoyImGhrET3%2Fimage.jpg?alt=media&token=91bcf3d3-78b4-458a-aa91-893345fc680d"
                // length
                // :
                // 1
                // __proto__
                // :
                // Array(0)
                // fullPath
                // :
                // "games/0EusMqJ3veoyImGhrET3/image.jpg"
                // generation
                // :
                // "1508448592962091"
                // md5Hash
                // :
                // "8CrDQQxximHs/HvqxhI38w=="
                // metageneration
                // :
                // "1"
                // name
                // :
                // "image.jpg"
                // size
                // :
                // 238032
                // timeCreated
                // :
                // "2017-10-19T21:29:52.663Z"
                // type
                // :
                // "file"
                // updated
                // :
                // "2017-10-19T21:29:52.663Z"
                // ref
                // :
                // (...)
                // get ref
                // :
                // ƒ generateRef()
                // __proto__
                // :
                // Object
                // const newItem = firebase
                //     .firestore()
                //     .collection(`games/${item.gameId}/items`)
                //     .doc(item.id);
                // item.id = newItem.id;
                // newItem
                //     .set(item)
                //     .then(() => {
                //         dispatch(
                //             {
                //                 type: types.SAVE_ITEM,
                //                 payload: item
                //             }
                //         );
                //     })
                //     .catch((e) => {
                //         console.log("ERROR saving item", e)
                //     })
            })
            .catch((e) => {
                console.log("ERROR saving item file", e)
            });
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
            .catch((e) => {
                console.log("ERROR saving character", e)
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