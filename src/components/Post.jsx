import LikeCommentShare from "./LikeCommentShare";
import ReadMore from "./ReadMore";
import UserNameAvatar from "./UserNameAvatar";
import { useState } from "react";

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

    const [likes, setLikes] = useState(post.reaction || 0);

    return ( 
        <div className="post-container">
            <div className="post-content">
                <UserNameAvatar post={post} deletePost={deletePost} handleShowEditModal={handleShowEditModal} />
                <img src={post.userImage} alt="Post" className="post-image" />
                <LikeCommentShare handleShow={handleShow} post={post} handleModalPost={handleModalPost} likes={likes} setLikes={setLikes} />
                <p className="reaction-text px-1">{likes} likes</p>
                <ReadMore text={post.post} maxLength={50} />
                <footer className="px-1"><time className="post-time">{formatDate(post.createdAt)}</time></footer>
            </div>
        </div>
     );
}
 
export default Post;