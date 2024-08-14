import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // Correct import
import userReducer from './reducers/userReducer';

// Combine reducers if you have more than one
const rootReducer = combineReducers({
    user: userReducer,
    // Add other reducers here if needed
});

// Create store with thunk middleware and Redux DevTools extension support
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) // Apply middleware with DevTools
);

export default store;
