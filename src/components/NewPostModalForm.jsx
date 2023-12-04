import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

const NewPostModalForm = ({ addNewPost, setNewPost, newPost, handleCloseNewPostModal }) => {
    //sets the state for the image URL been entered
    const [imageUrl, setImageUrl] = useState('');
    //sets the state for isValidUrl
    const [isValidUrl, setIsValidUrl] = useState(false);
    //check if the image URL is valid and sets teh setIsValidURL to true or false
    const checkImageUrl = (url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setIsValidUrl(true);
        };
        img.onerror = () => {
            setIsValidUrl(false);
        };
    };
    //handles change of input when URL is entered
    const handleInputChange = (e) => {
        const url = e.target.value;
        setImageUrl(url);
        checkImageUrl(url);
    };
    
    return ( 
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter image URL here</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="url"
                                pattern="https://"
                                aria-describedby="inputGroupPrepend"
                                placeholder="http://your.image.url"
                                value={imageUrl}
                            onChange={(e) => {
                                handleInputChange(e)
                                setNewPost({ ...newPost, userImage: e.target.value })
                            }}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter an image URL here
                            </Form.Control.Feedback>
                        </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter text here</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={(e) => setNewPost({ ...newPost, post: e.target.value })}
                    />
                </Form.Group>

                {isValidUrl ? (
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
                ) : (
                    <>
                    <p className='text-danger'>Please enter a valid image URL</p>
                    <Button
                        variant="primary"
                        disabled
                    >
                        Submit
                    </Button>    
                    </>
                )}
            </Form>
        </>
     );
}
 
export default NewPostModalForm;