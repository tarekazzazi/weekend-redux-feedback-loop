import { useHistory } from 'react-router-dom';
import { useState, } from 'react'
import { useDispatch } from 'react-redux';

function SupportedPage() {
    const dispatch = useDispatch();
    const [support, setSupport] = useState('0');

    const history = useHistory();
    const handleClick = () => {
            dispatch({
                type: 'SET_SUPPORT',
                payload: support,
            })
        history.push('/commentsPage-4');
    }
        return (
            <>
                <h2>How well are you being supported?</h2>

                <label htmlFor="number">Support?</label>
                <input type="number" defaultValue={0} min={0} max={10}
                       onChange={e => setSupport(e.target.value)}
                       value={support}
                />


                <button onClick={handleClick}>NEXT</button>

            </>
        )
    
}

export default SupportedPage;