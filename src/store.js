import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { projectListReducer, projectDetailsReducer } from './reducers/projectReducer.js'
import {articleListReducer} from './reducers/articleReducer.js'

const reducer = combineReducers({ 
    projectList: projectListReducer, 
    projectDetails: projectDetailsReducer,
    articleList: articleListReducer
});

const middleware = [thunk];

const initialState = {
    
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;