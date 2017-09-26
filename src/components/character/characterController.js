import React from 'react';

import CharacterEditor from './editor'

const CharacterControl = (props) =>{
    const URL = props.match.path;
    return (
        <div>
            <CharacterEditor characterId={props.match.params.id} {...props}/>
        </div>
    );
}

export default CharacterControl;