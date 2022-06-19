import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function ReviewFeedback() {
    const feelingReducer = useSelector((store) => store.feelingReducer);
    console.log('in review feedback the feeling level is',feelingReducer);
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