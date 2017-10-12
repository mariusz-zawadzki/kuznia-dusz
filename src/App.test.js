import test_setup from './test_setup'
import React from 'react';
import App from './App';
import { shallow , configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import './index.css';
import reducers from './reducers';

configure({ adapter: new Adapter() });
describe('app', () => {

  beforeEach(()=>{
  })

  it('renders without crashing', () => {
    const shallowApp = shallow(<App/>)
  });

});