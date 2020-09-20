import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import { dispatch } from 'store';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (localStorage.getItem('accessToken')) {
    dispatch.auth.verifyToken();
}

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root'),
);

serviceWorker.unregister();
