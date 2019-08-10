import * as ActionTypes from '../actions/ActionTypes';

export const bookmarks = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_BOOKMARK:
            console.log(ActionTypes.ADD_BOOKMARK);
            return(state);
        case ActionTypes.DELETE_BOOKMARK:
            console.log(ActionTypes.DELETE_BOOKMARK);
            return(state);
        default:
            return(state)
    }
};
