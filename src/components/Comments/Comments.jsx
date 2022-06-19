import { useHistory } from 'react-router-dom';
import { useState, } from 'react'
import { useDispatch } from 'react-redux';
function CommentsPage() {

    console.log('In comments Page');

    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'SET_COMMENT',
            payload: comment,
        })
        history.push('/reviewPage-5');
    }
    return (
        <>
            <h2>Any comments you want to leave?</h2>

            <label htmlFor="text">Comments</label>
            <input type="text" id='textComment'
                 onChange={e => setComment(e.target.value)}
                 value={comment}
            />

                <button onClick={handleClick}> NEXT </button>
            
        </>
    )
}

export default CommentsPage;