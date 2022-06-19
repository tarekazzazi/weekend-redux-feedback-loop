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
const feedback = (state = [], action) => {
    switch (action.type) {
        case 'GET_FEEDBACK':
            return action.payload;
    }
    return state;
}

// feeling reducer
const feelingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELING':
            console.log('new payload is' , Number(action.payload));
        return Number(action.payload)
    }
    return state;
}

// understanding reducer
    const understandingReducer = ( state = [], action) => {
        switch (action.type) {
            case 'SET_UNDERSTANDING':
                console.log('payload is', Number(action.payload));
            return Number(action.payload);
        }
        return state;
    }
// Store 
const store = createStore(
    combineReducers({
        feedback,
        feelingReducer,
        understandingReducer,

    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();



