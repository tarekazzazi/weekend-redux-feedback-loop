import { useHistory } from 'react-router-dom';
import { useState, } from 'react'
import { useDispatch } from 'react-redux';
function FeelingPage() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [feelingLvl, setFeelingLvl] = useState('0');

    const handleClick = () => {
        console.log('the feeling lvl is', feelingLvl);
            dispatch({
                type: 'SET_FEELING',
                payload:[feelingLvl],
            })


        history.push('/understanding-2');

    }
    return (
        <>

            <h2>How are you feeling today?</h2>

            <label htmlFor="number">Feeling?</label>
           
                <input id="feelingLvl" type="number" min={0} max={10} defaultValue={0} 
                    onChange={e => setFeelingLvl(e.target.value)}
                    value={feelingLvl}
                />

             <button onClick={handleClick}>NEXT</button> 


        </>
    )
}

export default FeelingPage;