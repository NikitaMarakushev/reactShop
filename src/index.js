import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

import './scss/app.scss';

import App from './App';

console.log(store.getState());

const inc = () => {
    store.dispatch({
        type: 'INCREMENT'
    });
};

store.subscribe(() => {
    console.log('CHANGED', store.getState());
})

ReactDOM.render( 
    <React.StrictMode >
        <Router>
            <button onClick={inc} > +</button>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
