import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
import materializeCSS from 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
