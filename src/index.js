import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));
