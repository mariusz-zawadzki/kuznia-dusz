import test_setup from './../../test_setup'
import React from 'react';
import {MemoryRouter} from 'react-router-dom'
import GamesList from './GamesList';
import { shallow,mount,  configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai';

configure({ adapter: new Adapter() });

const GAMES = [
    {
        "id":"1",
        "name":"game one"
    },
    {
        "id":"2",
        "name":"game two"
    }
]
describe('GameList', () => {

    let COMPONENT;
    beforeEach(() => {
        COMPONENT = mount(<MemoryRouter><GamesList games={GAMES} /></MemoryRouter>)
    })

    it('renders without crashing', () => {
        COMPONENT = mount(<MemoryRouter><GamesList games={[]} /></MemoryRouter>)
    });

    it('renders proper number of games', ()=>{
        expect(COMPONENT.find('li')).to.have.lengthOf(2)
    })

    it('renders new game link/button', ()=>{
        console.log(COMPONENT.find('.new-game'))
        expect(COMPONENT.find('a.game-new')).to.have.lengthOf(1)
    })

});