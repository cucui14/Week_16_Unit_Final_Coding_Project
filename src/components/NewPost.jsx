const NewPost = ({handleShowNewPostModal}) => {
    return ( 
        <>
            <button type="button" className="btn btn-outline-light me-4" onClick={() => handleShowNewPostModal()}>POST +</button>
        </>
     );
}
 
export default NewPost;