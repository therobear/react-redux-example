import * as types from './';

// Actions will take data that is either passed in or obtained and write the data to the store.
// You can also define async functions as well to wait for data coming back from REST calls.
export const updateUserName = (name) => dispatch => {
    dispatch({
        type: types.UPDATE_USER_NAME,
        payload: name
    }) 
}