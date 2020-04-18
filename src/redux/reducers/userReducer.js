import * as types from '../actions';

// Initializing the state for the reducer
// Normally you would not have any values in here, but for this example,
// we will set up an initial value
const initialState = {
    name: "Dude"
}

export default function(state = initialState, action) {
    // The switch will fire depending on which action is passed. The data (payload) from the 
    // action will be written to the state that was defined above.
    switch(action.type) {
        case types.UPDATE_USER_NAME: 
            return {
                ...state,
                name: action.payload
            }

        default:
            return state;
    }
}