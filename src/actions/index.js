
import firebase from './../firebase'
import fb from 'firebase'
import * as types from './types'

export function authenticate({history, location}){
    return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user && location.pathname !== '/signout') {
          history.push('/signin')
        }
        else if (user) {
          localStorage.setItem('authId', user.uid);
          // history.push('/games')
        }
      });
    };
}

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
        let itemId = item.id;
        let itemDoc;
        if (!itemId) {
            itemDoc = firebase
                .firestore()
                .collection(`games/${item.gameId}/items`)
                .doc();
            itemId = itemDoc.id;
            item.id = itemId
        }
        else {
            itemDoc = firebase
                .firestore()
                .collection(`games/${item.gameId}/items`)
                .doc(itemId);
        }
        
        if(!item.image.link){

            sendItemToFirebase({ itemDoc, item: {...item,image:{pending:true}}, dispatch });   
        }
        if (!item.image.link) {
            storageRef.child(`/games/${item.gameId}/images/${item.id}.jpg`)
                .put(item.image[0])
                .then((snapshot) => {
                    item.id = itemDoc.id;
                    item.image = {
                        id: snapshot.metadata.fullPath,
                        link: snapshot.downloadURL
                    }
                    sendItemToFirebase({ itemDoc, item, dispatch });
                })
                .catch((e) => {
                    console.log("ERROR saving item file", e)
                });
        }
    };
}

const sendItemToFirebase = ({ itemDoc, item, dispatch }) => {

    itemDoc
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
}
export function saveCharacter(characterData) {

    return (dispatch, getState) => {
        const character = { ...characterData };


        const characters = firebase.firestore().collection(`games/${character.gameId}/characters`);
        const newCharacter = character.id ? characters.doc(character.id) : characters.doc();
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
        const gamesCollection = firebase.firestore().collection("games");
        const newGame = game.id ? gamesCollection.doc(game.id) : gamesCollection.doc();
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