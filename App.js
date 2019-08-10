import React from 'react';
import { Provider } from 'react-redux';
import Main from './containers/MainComponent';
import { configureStore } from './configureStore';

const { store } = configureStore(); // add persistor later

export default function App() {
    return (
        <Provider store={ store }>
            <Main />
        </Provider>
    );
}
