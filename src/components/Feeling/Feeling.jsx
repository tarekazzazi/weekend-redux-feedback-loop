
import { Link } from 'react-router-dom';
function FeelingPage() {
    return (
        <>
            <h2>How are you feeling today?</h2>

            <label htmlFor="number">Feeling?</label>
            <input type="number" />
            <Link to="/understanding-2">
                <button>NEXT</button>
            </Link>
        </>
    )
}

export default FeelingPage;