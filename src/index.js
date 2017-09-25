// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import React from 'react'
import ReactDOM from 'react-dom';

import { render } from 'react-dom';
//import createHistory from 'history/createBrowserHistory'

import App from './components/App';
import Search from './components/Search';
// import PhotoGrid from './components/PhotoGrid';

import { Router, Route} from 'react-router'
import {Provider} from 'react-redux'
import store, {history} from './store'

const router = (
    <Provider store = {store}>
        <Router history= {history}>
        	<div>
	        	<Route exact path="/" component={App}/>
	        	<Route path="/search" component={Search}/> 
	        </div>               
        </Router>
    </Provider>
)
render(router, document.getElementById('root'));
registerServiceWorker();
