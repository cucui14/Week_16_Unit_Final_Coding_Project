import Comment from "./Comment";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CommentsList = ({ post, deleteCommentFromPost, setNewComment, addNewCommentToPost, newComment, allComments, updateComment }) => {
    
    return ( 
        <>
            <div>
                <h5 className="text-center border-top border-bottom border-dark-subtle border-3 py-2">Comments</h5>
                <InputGroup className="mb-3 px-2">
                    <Form.Control
                    placeholder="Enter comment here"
                    aria-label="New comment"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                    />
                    <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={(e) => addNewCommentToPost(e, post)}
                    >
                    Submit
                    </Button>
                </InputGroup>
                {allComments.map((comment, index) => {
                    return (
                        <div key={index} className="py-3 px-2">
                            <Comment comment={comment} post={post} deleteCommentFromPost={deleteCommentFromPost} updateComment={updateComment} />
                        </div>)
                })}
            </div>
        </>
     );
}
 
export default CommentsList;