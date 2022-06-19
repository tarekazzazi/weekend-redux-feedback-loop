import { useHistory } from 'react-router-dom';
import { useState, } from 'react'
import { useDispatch } from 'react-redux';
function UnderstadingPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('0');

    const handleClick = () => {

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding,
        })
        history.push('/supportedPage-3');

    }

    return (
        <>
            <h2>How well are you understading the content?</h2>

            <label htmlFor="number">Understanding?</label>
            <input type="number" defaultValue={0} min={0} max={10}
                onChange={e => setUnderstanding(e.target.value)}
                value={understanding}
            />


            <button onClick={handleClick}>NEXT</button>

        </>
    )
}

export default UnderstadingPage;