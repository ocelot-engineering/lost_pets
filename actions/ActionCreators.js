import * as ActionTypes from './ActionTypes';
import { PETS } from '../shared/pets';

// bookmark.js
export const addBookmark = (petId) => ({
    type: ActionTypes.ADD_BOOKMARK,
    payload: petId
});

export const deleteBookmark = (petId) => ({
    type: ActionTypes.DELETE_BOOKMARK,
    payload: petId
});

export const fetchLostPets = (location_config = {area: 'MELBOURNE', radius: 25}) => {
//export const fetchLostPets = (location_config = {area: 'MELBOURNE', radius: 25}) => (dispatch) => { // when we have thunk
/*
    dispatch(getLostPetsLoading());

    return fetch(baseUrl + 'pets')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(pets => dispatch(getLostPets(pets)))
    .catch(error => dispatch(getLostPetsFailed(error.message)));
*/
    //console.log(location_config);
    return getLostPets(pets = PETS); // temp solution until we get a REST API
};

export const getLostPetsLoading = () => ({
    type: ActionTypes.GET_LOST_PETS_LOADING
});

export const getLostPets = (pets) => ({
    type: ActionTypes.GET_LOST_PETS,
    payload: pets
});

export const getLostPetsFailed = () => ({
    type: ActionTypes.GET_LOST_PETS,
    payload: errMess
});

