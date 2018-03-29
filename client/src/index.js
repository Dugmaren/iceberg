// eslint-disable-next-line
import materializeCSS from 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// This lets me use the store from the developers console
window.store = store;

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
registerServiceWorker();
