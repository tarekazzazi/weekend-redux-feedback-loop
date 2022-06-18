import { useHistory } from 'react-router-dom';

function FeelingPage() {
    
    const history = useHistory();
    const handleClick = () => {
        console.log('hello');
        history.push('/understanding-2');

    }
    return (
        <>

            <h2>How are you feeling today?</h2>

            <label htmlFor="number">Feeling?</label>
           
                <input id="feelingLvl" type="number" min={0} max={10} defaultValue={0} />
            
            {/* <Link to="/understanding-2"> */}

             <button onClick={handleClick}>NEXT</button> 


        </>
    )
}

export default FeelingPage;