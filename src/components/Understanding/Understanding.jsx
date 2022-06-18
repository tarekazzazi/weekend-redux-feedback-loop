import { useHistory } from 'react-router-dom';
function UnderstadingPage() {
    const history = useHistory();

    const handleClick = () => {

        history.push('/supportedPage-3');

    }

    return (
        <>
            <h2>How well are you understading the content?</h2>

            <label htmlFor="number">Understanding?</label>
            <input type="number" defaultValue={0} min={0} max={10} />

            
            <button onClick={handleClick}>NEXT</button>

        </>
    )
}

export default UnderstadingPage;