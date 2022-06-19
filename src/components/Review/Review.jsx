import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function ReviewFeedback() {

    const feeling = useSelector((store) => store.feelingReducer);
    const understanding = useSelector((store) => store.understandingReducer);
    const support = useSelector((store) => store.supportReducer);
    const comments = useSelector((store) => store.commentReducer);

    console.log('in review answer is', feeling, understanding, support, comments);
    let newFeedback = {
        feeling,
        understanding,
        support,
        comments,
    };

    const history = useHistory();
    const handleClick = () => {

        axios({
            method: 'POST',
            url: '/feedback',
            data: newFeedback,

        })
            .then((response) => {
                console.log('the response is', response);
                history.push('/submitted');
            })

    };
    return (
        <>
            <h2>Review Your Feedback</h2>

            <ul>
                <li>Feelings: {feeling}</li>
                <li>Understanding: {understanding}</li>
                <li>Support: {support}</li>
                <li>Comments: {comments}</li>
            </ul>

            <button onClick={handleClick}>SUBMIT</button>

        </>
    );

}

export default ReviewFeedback;