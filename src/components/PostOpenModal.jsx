import Modal from 'react-bootstrap/Modal';
import CommentsList from './CommentsList';

function PostOpenModal({ show, setShow, modalPost, deleteCommentFromPost, setNewComment, addNewCommentToPost, newComment, allComments, updateComment }) {
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
      <Modal show={show} fullscreen="md-down" onHide={() => setShow(false)}>
        <Modal.Header className='border-0' closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center py-2">
                <img src={modalPost.avatar} width="40px" className="rounded-circle ms-1 me-2" />
                <div>
                    <p className="mb-0 username-text">{modalPost.name}</p>
                    <p className="mb-0 image-location">{modalPost.imagePlace}</p>
                </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='pt-0 px-0'>
          <img src={modalPost.userImage} className="w-100 pt-1" />
          <p className='pt-2 px-2'>{modalPost.post}</p>
          <p className='px-1 text-secondary'>{formatDate(modalPost.createdAt)}</p>
          <CommentsList className="pt-3" post={modalPost} deleteCommentFromPost={deleteCommentFromPost} setNewComment={setNewComment} addNewCommentToPost={addNewCommentToPost} newComment={newComment} allComments={allComments} updateComment={updateComment} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostOpenModal;