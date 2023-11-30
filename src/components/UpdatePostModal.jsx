import Modal from 'react-bootstrap/Modal';
import UdpatePostModalForm from './UpdatePostModalForm';

const UpdatePostModal = ({ showUpdateModal, setShowUpdateModal, updatePost, setUpdatePost, updateCurrentPost, handleCloseUpdatePostModal }) => {
    return (
        <>
            <Modal show={showUpdateModal} fullscreen="md-down" onHide={() => setShowUpdateModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>
                    <p>Edit post</p>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-0'>
                    <UdpatePostModalForm updatePost={updatePost} setUpdatePost={setUpdatePost} updateCurrentPost={updateCurrentPost} handleCloseUpdatePostModal={handleCloseUpdatePostModal} />
                </Modal.Body>
            </Modal>
        </>
    );
}
 
export default UpdatePostModal;