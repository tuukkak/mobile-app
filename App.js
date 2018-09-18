import React from 'react';
import BaseView from 'components/BaseView';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducers from 'ducks';
import { composeWithDevTools } from 'redux-devtools-extension';

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: 'json'
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(axiosMiddleware(client))));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BaseView />
            </Provider>
        );
    }
}
