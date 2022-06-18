import { useHistory } from 'react-router-dom';
function CommentsPage() {
    console.log('In comments Page');

    const history = useHistory();
    const handleClick = () => {

        history.push('/reviewPage-5');
    }
    return (
        <>
            <h2>Any comments you want to leave?</h2>

            <label htmlFor="text">Comments</label>
            <input type="text" id='textComment' />

                <button onClick={handleClick}> NEXT </button>
            
        </>
    )
}

export default CommentsPage;