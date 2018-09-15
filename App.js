import React from 'react';
import IntroNavigation from './src/components/content/intro/Navigation';
import MainNavigation from './src/components/content/main/Navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducers from 'ducks';
import { composeWithDevTools } from 'redux-devtools-extension';

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(axiosMiddleware(client))));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <IntroNavigation />
            </Provider>
        );
    }
}
