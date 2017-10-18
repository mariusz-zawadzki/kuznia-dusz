import test_setup from './../../test_setup'
import React from 'react';
import {MemoryRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import GameNew from './GameNew';
import { shallow,mount,  configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai,{ expect } from 'chai';
import chaiDom from 'chai-dom'
import configureMockStore from 'redux-mock-store'

chai.use(chaiDom)
configure({ adapter: new Adapter() });


const mockStore = configureMockStore([]);
const GAME = 
    {
        "id":"1",
        "name":"game one"
    }

describe('GameNew', () => {

    let COMPONENT;

    it('renders without crashing', () => {
        const store = mockStore({ games: [GAME] })
        COMPONENT = mount(<Provider store={store}><MemoryRouter><GameNew store={store} /></MemoryRouter></Provider>)
        expect(COMPONENT.find('.component-game-new')).to.have.length(1)
        expect(COMPONENT.find('input[name="id"]')).to.have.length(1)
        expect(COMPONENT.find('input[name="name"]')).to.have.length(1)
    });

    it('renders with init values', () => {
        const store = mockStore({ games: [GAME] })
        COMPONENT = mount(<Provider store={store}><MemoryRouter><GameNew store={store} match={{params:{id:GAME.id}}}/></MemoryRouter></Provider>)
        
        expect(COMPONENT.find('.component-game-new')).to.exist
    });

});