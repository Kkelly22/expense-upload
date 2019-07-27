import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, compose(applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : f => f))

ReactDOM.render((
  <Provider store={store}>
  	<App/>
  </Provider>),
  document.getElementById('root')
);

serviceWorker.unregister();
