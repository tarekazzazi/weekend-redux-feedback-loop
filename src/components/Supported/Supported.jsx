import { Link } from 'react-router-dom';
function SupportedPage() {
    return (
        <>
            <h2>How well are you being supported?</h2>

            <label htmlFor="number">Support?</label>
            <input type="number" />

            <Link to="/CommentsPage-4">
                <button>NEXT</button>
            </Link>    
        </>
    )
}

export default SupportedPage;