import React from 'react';
import axios from 'axios';
import './App.css';

// React Imports
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, } from 'react';

// Component Imports
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios({
      method: "GET",
      url: '/feedback',
    })
      .then((response) => {
        console.log("GET", response.data);
        // dispatch goes here
        dispatch({
          type: 'GET_FEEDBACK',
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(`Error getting pizza list, ${err}`);
      });
  };

  return (
          
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>

              <FeedbackForm />
              
      {/* LINKS TO BE CREATED */}
      {/* 

        // HOME

              <Route path="/" exact>
                <Home />
              </Route>
        
        // FORM

              <Route path="/feedback-form" exact>
                <FeedbackForm />
                </Route>

              <Route path="/feedback-form-page-1" exact>
                <FeedbackForm />
                </Route>

              <Route path="/feedback-form-page-2" exact>
                <FeedbackForm />
                </Route>

              <Route path="/feedback-form-page-3" exact>
                <FeedbackForm />
                </Route>

              <Route path="/feedback-form-page-4" exact>
                <FeedbackForm />
                </Route>ƒ

              <Route path="/feedback-form-page-5" exact>
                <FeedbackForm />
                </Route>
          
        // REVIEW

              <Route path="/review" exact>
                <Review />
                </Route>   

      */ }
    </Router>

  );
}

export default App;
