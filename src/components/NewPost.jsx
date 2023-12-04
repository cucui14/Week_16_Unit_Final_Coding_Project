const NewPost = ({handleShowNewPostModal}) => {
    return ( 
        <>
            <button type="button" className="btn btn-outline-light mx-4" onClick={() => handleShowNewPostModal()}>POST +</button>
        </>
     );
}
 
export default NewPost;