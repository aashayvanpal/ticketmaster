import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'

import configureStore from './store/configureStore.js'

const store = configureStore()

console.log(store.getState())


store.subscribe(()=>{
    console.log(store.getState())
})

export default store

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));
