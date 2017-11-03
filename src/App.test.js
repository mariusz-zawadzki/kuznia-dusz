import test_setup from './test_setup'
import React from 'react';
import App from './App.bare';
import { shallow , mount, configure} from 'enzyme'
import {MemoryRouter} from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16'
import reducers from './reducers';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store'

configure({ adapter: new Adapter() });
const EMPTY = ()=>{
  return <div/>
}
const NOTHING = ()=>{/* do nothing*/}
const mockStore = configureMockStore([]);
const store = mockStore([]);
describe('app', () => {

  beforeEach(()=>{
  })

  it('renders without crashing', () => {
    const shallowApp = shallow(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>)
  });

  it('renders fully without crashing', () => {
    const fullapp = mount(<Provider store={store}><MemoryRouter><App 
    authenticate={NOTHING}
    components={{
      Games: EMPTY,
      SignIn: EMPTY,
      SignOut: EMPTY
    }}/></MemoryRouter></Provider>)
  });

});