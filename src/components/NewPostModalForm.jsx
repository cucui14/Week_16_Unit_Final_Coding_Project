import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewPostModalForm = ({ addNewPost, setNewPost, newPost, handleCloseNewPostModal }) => {
    return ( 
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter image URL here"
                        onChange={(e) => setNewPost({ ...newPost, userImage: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Post text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={(e) => setNewPost({ ...newPost, post: e.target.value })}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    data-bs-dismiss="modal"
                    onClick={(e) => {
                        addNewPost(e)
                        handleCloseNewPostModal()
                    }}
                >
                    Submit
                </Button>
            </Form>
        </>
     );
}
 
export default NewPostModalForm;