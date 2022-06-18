import { Link } from 'react-router-dom';
function ReviewFeedback() {
    return (
        <>
            <h2>Review Your Feedback</h2>

            <ul>
                <li>Feelings:</li>
                <li>Understanding:</li>
                <li>Support:</li>
                <li>Comments:</li>
            </ul>
            <Link to="/submitted">
                <button>SUBMIT</button>
            </Link>
        </>
    );

}

export default ReviewFeedback;