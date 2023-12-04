import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Comment = ({ comment, post, deleteCommentFromPost, updateComment }) => {
    //sets the useState for the comment been edited
    const [isEditing, setIsEditing] = useState(false);
    //sets the useState for the comment text being edited
    const [editedText, setEditedText] = useState(comment.comment);

    //Function to format the date of the comment
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
    //handles editing of the comment
    const handleEdit = () => {
        setIsEditing(true);
    };
    //handles save of edited comment
    const handleSave = () => {
        updateComment(post, comment, editedText);

        // After the comment is updated, exit editing mode
        setIsEditing(false);
    };
    //handles cancel of editing comment
    const handleCancel = () => {
        // If editing is cancelled, reset the edited text and exit editing mode
        setEditedText(comment.comment);
        setIsEditing(false);
    };
    
    return (
        <>
            <div className="d-flex justify-between align-items-start">
                <div className="d-flex align-items-start">
                    <img src={comment.avatar} width="40px" className="rounded-circle ms-1 me-2"/>
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                    ) : (
                        <p><span className='fw-bold'>{comment.name}</span> {comment.comment}</p>
                    )}
                </div>
                <div className='ps-1'>
                    {comment.name === 'Angel.Pureco' ? (
                        <Dropdown className="d-inline mx-2" autoClose="inside" drop='down-centered'>
                            <Dropdown.Toggle className='border-0 bg-transparent text-dark' id="dropdown-autoclose-inside">
                            ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {isEditing ? (
                                    <div className="d-flex justify-content-evenly">
                                        <button type="button" className="btn btn-outline-success" onClick={handleSave}>Save</button>
                                        <button type="button" className="btn btn-outline-danger" onClick={handleCancel}>Cancel</button>
                                    </div>
                                ) : (
                                    <div className="d-flex justify-content-evenly">
                                        <button type="button" className="btn btn-outline-danger" onClick={() => deleteCommentFromPost(post, comment)}>Delete</button>
                                        <button type="button" className="btn btn-outline-info" onClick={handleEdit}>Edit</button>
                                    </div>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : null}
                </div>
            </div>
            <p className='px-1 text-seconday'>{formatDate(comment.createdAt)}</p>
        </>
    );
};
 
export default Comment;