import PostsList from "../PostsList";

const Home = ({ posts, deletePost, updatePost, setUpdatePost, showUpdateModal, setShowUpdateModal, handleShowEditModal, updateCurrentPost, handleCloseUpdatePostModal, deleteCommentFromPost, setNewComment, addNewCommentToPost, newComment, getCommentsForSinglePost, allComments, updateComment }) => {

    return ( 
        <>
            <h2 className="fs-4 p-2">Timeline</h2>
            <PostsList posts={posts} deletePost={deletePost} updatePost={updatePost} setUpdatePost={setUpdatePost} showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} handleShowEditModal={handleShowEditModal} updateCurrentPost={updateCurrentPost} handleCloseUpdatePostModal={handleCloseUpdatePostModal} deleteCommentFromPost={deleteCommentFromPost} setNewComment={setNewComment} addNewCommentToPost={addNewCommentToPost} newComment={newComment} getCommentsForSinglePost={getCommentsForSinglePost} allComments={allComments} updateComment={updateComment} />
        </>
     );
}
 
export default Home;