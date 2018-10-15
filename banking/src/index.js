import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
