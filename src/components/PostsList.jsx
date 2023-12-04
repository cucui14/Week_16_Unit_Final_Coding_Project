import { useState, useEffect } from 'react';
import Post from "./Post";
import PostOpenModal from "./PostOpenModal";
import UpdatePostModal from './UpdatePostModal';

const PostsList = ({ posts, deletePost, updatePost, setUpdatePost, showUpdateModal, setShowUpdateModal, handleShowEditModal, updateCurrentPost, handleCloseUpdatePostModal, deleteCommentFromPost, setNewComment, addNewCommentToPost, newComment, getCommentsForSinglePost, allComments, updateComment }) => {
    //Sets useState to show the modal
    const [show, setShow] = useState(false);
    //Sets UseState to show current post on the modal
    const [modalPost, setModalPost] = useState('');

    //handles show of PostOpenModal
    function handleShow() {
        setShow(true);
    }
    
    //handles post content of PostOpenModal
    function handleModalPost(post) {
        setModalPost(post);
        getCommentsForSinglePost(post);
    }

    return ( 
        <>
            <UpdatePostModal showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} updatePost={updatePost} setUpdatePost={setUpdatePost} updateCurrentPost={updateCurrentPost} handleCloseUpdatePostModal={handleCloseUpdatePostModal} />
            <PostOpenModal show={show} setShow={setShow} modalPost={modalPost} deleteCommentFromPost={deleteCommentFromPost} setNewComment={setNewComment} addNewCommentToPost={addNewCommentToPost} newComment={newComment} allComments={allComments} updateComment={updateComment} />
            <div className="row mx-0">
                {posts.map((post, index) => {
                    return (
                        <article key={index} className="col-sm-6 col-md-4 px-0 px-sm-1">
                            <Post post={post} handleShow={handleShow} handleModalPost={handleModalPost} deletePost={deletePost} handleShowEditModal={handleShowEditModal} />
                        </article>
                    )
                })}
            </div>
        </>
    );
}
 
export default PostsList;