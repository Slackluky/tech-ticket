import React from 'react';
import ReactDOM from 'react-dom';
import {initializeFirebase} from './push-notifications'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
<App />
</Router>
, document.getElementById('root'));
initializeFirebase()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
