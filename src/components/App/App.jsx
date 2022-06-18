import React from 'react';
import axios from 'axios';
import './App.css';

// React Imports
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, } from 'react';

// Component Imports
import CommentsPage from '../Comments/Comments.jsx';
import FeelingPage from '../Feeling/Feeling.jsx';
import UnderstadingPage from '../Understanding/Understanding.jsx';
import SupportedPage from '../Supported/Supported.jsx';
import SubmittedPage from '../Submit/Submit.jsx';
import ReviewFeedback from '../Review/Review.jsx';

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
      <Route path="/" exact>
        <FeelingPage />
      </Route>

      <Route path="/understanding-2" exact>
        <UnderstadingPage />
      </Route>

      <Route path="/SupportedPage-3" exact>
        <SupportedPage />
      </Route>

      <Route path="/CommentsPage-4" exact>
        <CommentsPage />
      </Route>

      <Route path="/ReviewPage-5" exact>
        <ReviewFeedback />
      </Route>

      <Route path="/submitted" exact>
        <SubmittedPage />
      </Route>

    </Router>

  );
}

export default App;
