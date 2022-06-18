import { useHistory } from 'react-router-dom';

function FeelingPage() {

    const history = useHistory();
    const handleClick = () => {

        history.push('/understanding-2');
      
    }
    return (
        <>


            <h2>How are you feeling today?</h2>

            <label htmlFor="number">Feeling?</label>
            <input type="number" />
            {/* <Link to="/understanding-2"> */}

            <button onClick={handleClick}>NEXT</button>


        </>
    )
}

export default FeelingPage;