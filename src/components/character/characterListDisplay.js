import React from 'react';
import {Link} from 'react-router-dom';

import Characters from './characterList'
import _ from 'lodash';

const CharacterListDisplay = (props) =>{
    const URL = props.match.path;
    const characterList = _.map(Characters, (c, key)=>{
        return <li key={c.id}><Link to={URL+"/"+key}>{c.name}</Link></li>
    });
    return (
        <ul>{characterList}</ul>
    );
}

export default CharacterListDisplay;