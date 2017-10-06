import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import { shallow , configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

configure({ adapter: new Adapter() });
describe('app', () => {

  beforeEach(()=>{
/*

const createStoreWithMiddleware = applyMiddleware()(createStore);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>, div);
       */
  })

  it('renders without crashing', () => {
    const shallowApp = shallow(<App/>)
  });

});