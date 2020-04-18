import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as actionCreators from './actions';

// Initalizing the state
const initialState = {};

// Creating an array of middleware that Redux will use
const middleware = [thunk];

// Declaring the initial store variable
let store;

// Configuring how the Redux DevTools will connect to the app
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__({actionCreators, serialize: true, trace: true});

// Setting up the store if the browser is Internet Explorer. Not doing this will 
// prevent the app from running in Internet Explorer
if ((window.navigator.userAgent.indexOf("Chrome") !== -1 ||
    window.navigator.userAgent.indexOf("Firefox") !== -1)
    && ReactReduxDevTools) {
    store = createStore(rootReducer, initialState,
        compose(applyMiddleware(...middleware), ReactReduxDevTools));

} else {
    // Set up the store for Firefox and Chrome
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
}

export default store;