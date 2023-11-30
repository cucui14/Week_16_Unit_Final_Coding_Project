import LikeCommentShare from "./LikeCommentShare";
import ReadMore from "./ReadMore";
import UserNameAvatar from "./UserNameAvatar";

const Post = ({ post, handleShow, handleModalPost, deletePost, handleShowEditModal }) => {

    return ( 
        <>
            <UserNameAvatar post={post} deletePost={deletePost} handleShowEditModal={handleShowEditModal} />
            <img src={post.userImage} className="w-100 pt-1" />
            <LikeCommentShare handleShow={handleShow} post={post} handleModalPost={handleModalPost} />
            <p className="px-1 pb-1 mb-0">{post.reaction} likes</p>
            <ReadMore text={post.post} maxLength={50} />
            <p className="px-1 text-secondary">{post.createdAt}</p>
        </>
     );
}
 
export default Post;