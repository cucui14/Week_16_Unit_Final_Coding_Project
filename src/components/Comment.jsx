import NavDropdown from 'react-bootstrap/NavDropdown';

const Comment = ({ comment, post, deleteCommentFromPost }) => {
    return ( 
        <>
            <div className="d-flex justify-between align-items-start">
                <div className="d-flex align-items-start">
                    <img src={comment.avatar} width="40px" className="rounded-circle ms-1 me-2"/>
                    <p><span className='fw-bold'>{comment.name}</span> {comment.comment}</p>
                </div>
                <div className='ps-1'>
                    {comment.name == 'Angel.Pureco' ?
                        <NavDropdown className='my-2 pe-3' title="..." id="basic-nav-dropdown" drop="down-centered">
                            <div className="d-flex justify-content-evenly">
                                <button type="button" className="btn btn-outline-danger" onClick={() => deleteCommentFromPost(post, comment)}>Delete</button>
                                <button type="button" className="btn btn-outline-info" onClick={() => handleShowEditModal(comment)}>Edit</button>
                            </div>
                        </NavDropdown>
                        : <div></div>}
                </div>
            </div>
            <p className='px-1 text-seconday'>{post.createdAt}</p>
        </>
     );
}
 
export default Comment;