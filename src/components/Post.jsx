import LikeCommentShare from "./LikeCommentShare";
import ReadMore from "./ReadMore";
import UserNameAvatar from "./UserNameAvatar";

const Post = ({ post, handleShow, handleModalPost, deletePost, handleShowEditModal }) => {
    //format the date of each post
    const formatDate = (inputDate) => {
        const date = new Date(inputDate); // Parse the date string

        // Get year, month, and day from the parsed date
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');

        // Construct the formatted date string in the desired format
        const formattedDate = `${month}-${day}-${year}`;

        return formattedDate;
    };

    return ( 
        <>
            <UserNameAvatar post={post} deletePost={deletePost} handleShowEditModal={handleShowEditModal} />
            <img src={post.userImage} className="w-100 pt-1" />
            <LikeCommentShare handleShow={handleShow} post={post} handleModalPost={handleModalPost} />
            <p className="px-1 pb-1 mb-0">{post.reaction} likes</p>
            <ReadMore text={post.post} maxLength={50} />
            <footer><time className="px-1 text-secondary">{formatDate(post.createdAt)}</time></footer>
        </>
     );
}
 
export default Post;