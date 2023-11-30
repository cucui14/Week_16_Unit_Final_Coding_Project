import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UdpatePostModalForm = ({ updatePost, setUpdatePost, updateCurrentPost, handleCloseUpdatePostModal }) => {
    return ( 
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter image URL here"
                        value={updatePost.userImage}
                        onChange={(e) => setUpdatePost({ ...updatePost, userImage: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Post text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={updatePost.post}
                        onChange={(e) => setUpdatePost({ ...updatePost, post: e.target.value })}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    data-bs-dismiss="modal"
                    onClick={(e) => {
                        updateCurrentPost(e, updatePost)
                        handleCloseUpdatePostModal()
                    }}
                >
                    Update
                </Button>
            </Form>
        </>
     );
}
 
export default UdpatePostModalForm;