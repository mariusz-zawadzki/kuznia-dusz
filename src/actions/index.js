import firebase from '../firebase'
import * as types from './types'
require("firebase/firestore");

export function signOutUser(){
    return ()=>firebase.auth().signOut()
}

export function signIn(){
    return ()=>firebase.auth().signInWithPopup();
}
export function saveCharacter(characterData) {
    const character = {...characterData};
    
    character.id = character.id    || `${Date.now()}`
    console.log("Character saved: ",(character))
    return (dispatch, getState) =>{

        dispatch(
            {
            type: types.SAVE_CHARACTER,
            payload: character
            }
        );

    };
}

export function saveGame(gameData) {
    const game = {...gameData};
    return (dispatch, getState) =>{
            game.id = game.id   || `${Date.now()}`
            console.log("Game saved: ",game)
            dispatch(
                {
                type: types.SAVE_GAME,
                payload: game
                }
            );
            // const firestore = firebase.firestore();
            // const newGame = firestore.collection("games").doc(game.id);
            // if(game.owners === undefined)
            // {
            //     let currentUser = localStorage.getItem('authId');
            //     let owners = {}
            //     owners[currentUser] = "ADMIN";
            //     game.owners = owners;
            // }
            // console.log(getState);
            // newGame
            // .set(game)
            // .then(function(doc){
            //     console.log("Status saved", doc);
            //     // dispatch(
            //     //     {
            //     //     type: types.SAVE_GAME,
            //     //     payload:
            //     //         {
            //     //             id: newGame.id,
            //     //             ...game
            //     //         }
            //     //     }
            //     // );
            // })
            // .catch((e) => {
            //     console.log("ERROR", e)
            // })
    }
}