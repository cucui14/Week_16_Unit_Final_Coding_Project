import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const UserNameAvatar = ({ post, deletePost, handleShowEditModal }) => {
    //sets the useState for the post been deleted
    const [isDeleting, setIsDeleting] = useState(false);
    //handles deletion of the post
    const handleDelete = () => {
        setIsDeleting(true);
    };
    //handles cancel of deleting post
    const handleCancel = () => {
        setIsDeleting(false);
    };

    return ( 
        <>
            <div className="d-flex justify-content-between align-items-center">
                <header className="d-flex align-items-center py-2">
                    <img src={post.avatar} width="40px" className="rounded-circle ms-1 me-2" />
                    <div>
                        <p className="mb-0 username-text">{post.name}</p>
                        <p className="mb-0 image-location">{post.imagePlace}</p>
                    </div>
                </header>
                <div>
                    {post.name == 'Angel.Pureco' ?
                        <Dropdown className="d-inline mx-2" drop='down-centered' autoClose="true">
                            <Dropdown.Toggle className='border-0 bg-transparent text-dark' id={post.id}>
                            ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {isDeleting ? (
                                    <>
                                        <p className="text-center">Are you sure?</p>
                                        <div className="d-flex justify-content-evenly">
                                            <button type="button" className="btn btn-outline-danger" onClick={() => {
                                                deletePost(post.id)
                                                setIsDeleting(false);
                                            }}>Yes</button>
                                            <button type="button" className="btn btn-outline-info" onClick={handleCancel}>No</button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="d-flex justify-content-evenly">
                                        <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
                                        <button type="button" className="btn btn-outline-info" onClick={() => handleShowEditModal(post)}>Edit</button>
                                    </div>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        : <div></div>}
                </div>
            </div>
        </>
     );
}
 
export default UserNameAvatar;