import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import Redux dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// feedback reducer
// stores feedback state in redux store
const feedback = (state = [], action) => {
    switch (action.type) {
        case 'GET_FEEDBACK':
            return action.payload;
    }
    return state;
}

// feeling reducer
const feelingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            console.log('feeling is', Number(action.payload));
            return Number(action.payload)
    }
    return state;
}

// understanding reducer
const understandingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            console.log('understanding is', Number(action.payload));
            return Number(action.payload);
    }
    return state;
}

// support reducer
const supportReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            console.log(' support is', Number(action.payload));
            return Number(action.payload);
    }
    return state;
}

// comment reducer 
const commentReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_COMMENT':
        console.log('comment is:', (action.payload));
        return action.payload;
    }
    return state
}
// Store 
const store = createStore(
    combineReducers({
        feedback,
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,

    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();



