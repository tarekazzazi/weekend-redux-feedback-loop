import React from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, } from 'react';

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

      {/* LINKS TO BE CREATED */}
      {/* 

        <Route path="/" exact>
          <Home />
        </Route>
        
        <Route path="/feedback-form" exact>
          <FeedbackForm />
          </Route>

        <Route path="/feedback-form-page-1" exact>
          <FeedbackForm />
          </Route>

        <Route path="/feedback-form-page-2" exact>
          <FeedbackForm />
          </Route>

        <Route path="/feedback-form-page-2" exact>
          <FeedbackForm />
          </Route>


      */ }
    </Router>

  );
}

export default App;
