import { useHistory } from 'react-router-dom';
function ReviewFeedback() {
    
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