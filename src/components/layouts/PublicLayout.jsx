import Header from '../Header';
import Navigation from '../Navigation';
import UserProfile from '../UserProfile';
import Search from '../Search';
import TopNavLinks from '../TopNavLinks';
import NewPost from '../NewPost';
import NewPostModal from '../NewPostModal';
import { useState } from 'react';

const PublicLayout = ({ children, addNewPost, setNewPost, newPost }) => {
    //Sets useState for the form in the modal for a new post
    const [showNewPostModal, setShowNewPostModal] = useState(false);
    //handles showing the modal for a new post
    function handleShowNewPostModal() {
        setShowNewPostModal(true);
    };
    //handles closing the modal for a new post
    const handleCloseNewPostModal = () => setShowNewPostModal(false);

    return ( 
        <>
            <Header>
                <Navigation>
                    <TopNavLinks />
                    <Search />
                    <div className=' py-2 d-flex flex-row-reverse justify-content-end flex-lg-row'>
                        <NewPost handleShowNewPostModal={handleShowNewPostModal} />
                        <UserProfile />
                    </div>
                </Navigation>
            </Header>
            <main className='mx-xl-5'>
                <NewPostModal showNewPostModal={showNewPostModal} setShowNewPostModal={setShowNewPostModal} addNewPost={addNewPost} setNewPost={setNewPost} newPost={newPost} handleCloseNewPostModal={handleCloseNewPostModal} />
                    {children}    
                </main>
        </>
     );
}
 
export default PublicLayout;