import { createStore, combineReducers } from 'redux';
import { bookmarks } from './reducers/bookmarks';

export const configureStore = () => {

    const rootReducer = combineReducers({
        bookmarks
    });

    const store = createStore(rootReducer); // apply middleware and persistor later

    return( { store } );
};
