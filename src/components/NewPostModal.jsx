import Modal from 'react-bootstrap/Modal';
import NewPostModalForm from './NewPostModalForm';

const NewPostModal = ({ showNewPostModal, setShowNewPostModal, addNewPost, setNewPost, newPost, handleCloseNewPostModal }) => {
    return (
        <>
            <Modal show={showNewPostModal} fullscreen="md-down" onHide={() => setShowNewPostModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p>New post</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-0'>
                    <NewPostModalForm addNewPost={addNewPost} setNewPost={setNewPost} newPost={newPost} handleCloseNewPostModal={handleCloseNewPostModal} />
                </Modal.Body>
            </Modal>
        </>
    );
};
 
export default NewPostModal;