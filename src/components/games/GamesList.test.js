import test_setup from './../../test_setup'
import React from 'react';
import {MemoryRouter} from 'react-router-dom'
import {GameListRaw} from './GamesList';
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
        COMPONENT = mount(<MemoryRouter><GameListRaw games={GAMES} /></MemoryRouter>)
    })

    it('renders without crashing', () => {
        COMPONENT = mount(<MemoryRouter><GameListRaw games={[]} /></MemoryRouter>)
        expect(COMPONENT.find('.games-list')).to.have.lengthOf(1)
    });

    it('renders proper number of games', ()=>{
        expect(COMPONENT.find('li')).to.have.lengthOf(GAMES.length)
    })

    it('renders new game link/button', ()=>{
        expect(COMPONENT.find('a.games-new')).to.have.lengthOf(1)
    })

});