import { useHistory } from 'react-router-dom';
import { useState, } from 'react'
import { useDispatch } from 'react-redux';
import './Feeling.css';
function FeelingPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [feelingLvl, setFeelingLvl] = useState('0');

    const handleClick = () => {
        console.log('the feeling lvl is', feelingLvl);
        dispatch({
            type: 'SET_FEELING',
            payload: [feelingLvl],
        })


        history.push('/understanding-2');

    }
    return (
        <>
        <div> 
            <div className='conatiner'>
                <h2>How are you feeling today?</h2>

                <label htmlFor="number">Feeling?</label>

                <input id="feelingLvl" type="number" min={0} max={10} 
                    onChange={e => setFeelingLvl(e.target.value)}
                    value={feelingLvl}
                />
            </div>
            <div>
                <button onClick={handleClick}>NEXT</button>
            </div>
            </div>
        </>
    )
}

export default FeelingPage;