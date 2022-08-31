import * as ActionTypes from '../actions/ActionTypes';

export const lostPets = (state = { isLoading: true, errMess: null, pets:[]}, action) => {
    switch (action.type) {
        case ActionTypes.GET_LOST_PETS:
            return {...state, isLoading: false, errMess: null, pets: action.payload};
        case ActionTypes.GET_LOST_PETS_LOADING:
            return {...state, isLoading: true, errMess: null, pets: []}
        case ActionTypes.GET_LOST_PETS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
        }
};