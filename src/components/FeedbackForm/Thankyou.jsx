import { useState } from 'react'

function FeedbackForm() {
    console.log('In feedback Form');
    return (
        <>
            <form>
                <h2>Any comments you want to leave?</h2>

                    <label htmlFor="text">Comments</label>
                    <input type="text" id='textComment' />

                <h2>How are you feeling today?</h2>

                    <label htmlFor="number">Feeling?</label>
                    <input type="number" />

                <h2>How well are you being supported?</h2>

                    <label htmlFor="number">Support?</label>
                    <input type="number" />

                <h2>How well are you understading the content</h2>

                <label htmlFor="number">Understanding?</label>
                <input type="number" />
            </form>

        </>
    )

}


export default FeedbackForm;