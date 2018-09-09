import React from 'react';
import Navigation from './src/components/content/main/Navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { reducers } from './src/reducers';

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
});

const store = createStore(reducers, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}
