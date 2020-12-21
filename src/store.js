import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { projectListReducer, projectDetailsReducer } from './reducers/projectReducer.js'

const reducer = combineReducers({ 
    projectList: projectListReducer, 
    projectDetails: projectDetailsReducer
});

const middleware = [thunk];

const initialState = {
    
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;