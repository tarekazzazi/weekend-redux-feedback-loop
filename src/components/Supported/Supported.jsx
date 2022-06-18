import { useHistory } from 'react-router-dom';
function SupportedPage() {
    const history = useHistory();
    const handleClick = () => {

        history.push('/commentsPage-4');
    }
        return (
            <>
                <h2>How well are you being supported?</h2>

                <label htmlFor="number">Support?</label>
                <input type="number" defaultValue={0} min={0} max={10} />


                <button onClick={handleClick}>NEXT</button>

            </>
        )
    
}

export default SupportedPage;