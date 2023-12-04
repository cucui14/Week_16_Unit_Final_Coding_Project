import Dropdown from "react-bootstrap/Dropdown";

const UserNameAvatar = ({ post, deletePost, handleShowEditModal }) => {
    return ( 
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center py-2">
                    <img src={post.avatar} width="40px" className="rounded-circle ms-1 me-2" />
                    <div>
                        <p className="mb-0 username-text">{post.name}</p>
                        <p className="mb-0 image-location">{post.imagePlace}</p>
                    </div>
                </div>
                <div>
                    {post.name == 'Angel.Pureco' ?
                        <Dropdown className="d-inline mx-2" drop='down-centered'>
                            <Dropdown.Toggle className='border-0 bg-transparent text-dark' id="dropdown-autoclose-true">
                            ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="d-flex justify-content-evenly">
                                    <button type="button" className="btn btn-outline-danger" onClick={() => deletePost(post.id)}>Delete</button>
                                    <button type="button" className="btn btn-outline-info" onClick={() => handleShowEditModal(post)}>Edit</button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        : <div></div>}
                </div>
            </div>
        </>
     );
}
 
export default UserNameAvatar;