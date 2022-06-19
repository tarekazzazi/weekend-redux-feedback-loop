import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function ReviewFeedback() {
    const feeling = useSelector((store) => store.feelingReducer);
    const understanding = useSelector((store) => store.understandingReducer);
    const support = useSelector((store) => store.supportReducer);
    const comment = useSelector((store) => store.commentReducer);
    console.log('in review answer is',feeling, understanding, support, comment);
    
    const history = useHistory();
    const handleClick = () => {

        history.push('/submitted');
    }
    return (
        <>
            <h2>Review Your Feedback</h2>

            <ul>
                <li>Feelings:</li>
                <li>Understanding:</li>
                <li>Support:</li>
                <li>Comments:</li>
            </ul>
            
                <button onClick={handleClick}>SUBMIT</button>
            
        </>
    );

}

export default ReviewFeedback;