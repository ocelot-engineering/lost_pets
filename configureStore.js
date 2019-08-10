import { createStore, combineReducers } from 'redux';
import { bookmarks } from './reducers/bookmarks';
import { lostPets } from './reducers/lostPets';

export const configureStore = () => {

    const reducers = combineReducers({
        bookmarks,
        lostPets
    });

    const store = createStore(reducers); // apply middleware and persistor later

    return( { store } );
};
