
import { useHistory } from 'react-router-dom';

function SubmittedPage() {
  console.log('In SubmittedPage! ');

  const history = useHistory();
  const handleClick = () => {

    history.push('/');
  }
  return (
    <>
      <h1>Thank you!</h1>

      <button onClick={handleClick}>Leave New Feedback</button>


    </>
  )

}


export default SubmittedPage;