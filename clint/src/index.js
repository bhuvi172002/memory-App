import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer,compose(applyMiddleware(thunk)));
ReactDom.render(
<Provider store={ store}>
<App/>
</Provider>
,document.getElementById('root'));