import { Link } from 'react-router-dom';
function UnderstadingPage() {
    return (
        <>
            <h2>How well are you understading the content?</h2>

            <label htmlFor="number">Understanding?</label>
            <input type="number" />

            <Link to="/SupportedPage-3">
                <button>NEXT</button>
            </Link>         
        </>
    )
}

export default UnderstadingPage;