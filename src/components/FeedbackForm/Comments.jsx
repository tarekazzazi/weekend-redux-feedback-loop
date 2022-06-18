
function CommentsPage() {
    console.log('In comments Page');
    return (
        <>
            <h2>Any comments you want to leave?</h2>

            <label htmlFor="text">Comments</label>
            <input type="text" id='textComment' />
            {/* next button goes to review page before page 5  */}
        </>
    )
}

export default CommentsPage;