import { useState } from 'react';
import { Link } from 'react-router-dom';

function SubmittedPage() {
  console.log('In SubmittedPage! ');
  return (
    <>
      <h1>Thank you!</h1>
      <Link to="/">
        <button>Leave New Feedback</button>
      </Link>

    </>
  )

}


export default SubmittedPage;