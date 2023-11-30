import { useEffect, useState } from 'react';
import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layouts/PublicLayout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//POSTS API
const POSTS_API = 'https://655e701c879575426b4385c2.mockapi.io/api/v1/';
//COMMENTS API
// const COMMENTS_API = 'https://655e701c879575426b4385c2.mockapi.io/api/v1/';

//current date
const currentDateAndTime = new Date();
const formattedDate = currentDateAndTime.toLocaleString();

function App() {

  //GET POSTS
  //Sets useState for all posts
  const [posts, setPosts] = useState([]);
  //gets all postts from API
  const getPosts = () => {
    fetch(POSTS_API + '/post?sortBy=createdAt&order=desc')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log('Returned data', data);
        return setPosts(data)
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  //DELETE POST
  const deletePost = (id) => {
    fetch(`${POSTS_API}/post/${id}`, {
      method: 'DELETE',
    }).then(() => getPosts());
  };

  //ADD NEW POST
  //Sets useState for a new post
  const [newPost, setNewPost] = useState({
    createdAt: formattedDate,
    name: 'Angel.Pureco',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/660.jpg',
    post: '',
    userImage: '',
  });
  //Adds a new post to the API
  const addNewPost = (e) => {
    e.preventDefault();

    fetch(`${POSTS_API}/post/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    }).then(() => getPosts());
  };

  //UPDATE POST
  //Sets useState for the form that updates a post
  const [updatePost, setUpdatePost] = useState({
    post: '',
    userImage: '',
  })
  //Sets useState to show the UpdatePostModal to update a post
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  //handles show of UpdatePostModal
  function handleShowEditModal(post) {
      setUpdatePost({
        ...post,
        post: post.post,
        userImage: post.userImage,
        })
        setShowUpdateModal(true);
    };
  //Updates current post to API
  const updateCurrentPost = (e, postObject) => {
    e.preventDefault();

    let updatedPostObject = {
      ...postObject,
      post: updatePost.post,
      userImage: updatePost.userImage,
    };

    fetch(`${POSTS_API}/post/${postObject.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedPostObject),
    }).then(() => getPosts());
  };
  //handles close of UpdatePostModal
  const handleCloseUpdatePostModal = () => setShowUpdateModal(false);
  

  //DELETE A COMMENT ON A POST
  const deleteCommentFromPost = (post, comment) => {
    fetch(`${POSTS_API}/post/${post.id}/comments/${comment.id}`, {
      method: 'DELETE',
    }).then(() => getPosts());
  };
  //ADD NEW COMMENT ON A POST
  //sets useState for the new comment
  const [newComment, setNewComment] = useState({
    createdAt: formattedDate,
    name: 'Angel.Pureco',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/660.jpg',
    comment: '',
  });
  //posts the new comment
  const addNewCommentToPost = (e, post) => {
    e.preventDefault();

    fetch(`${POSTS_API}post/${post.id}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    }).then(() => getPosts());
  };



  return (
    <>
      <PublicLayout addNewPost={addNewPost} setNewPost={setNewPost} newPost={newPost} >
        <Routes>
          <Route index element={<Home posts={posts} deletePost={deletePost} updatePost={updatePost} setUpdatePost={setUpdatePost} showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} handleShowEditModal={handleShowEditModal} updateCurrentPost={updateCurrentPost} handleCloseUpdatePostModal={handleCloseUpdatePostModal} deleteCommentFromPost={deleteCommentFromPost} setNewComment={setNewComment} addNewCommentToPost={addNewCommentToPost} newComment={newComment} />} />
          <Route path="about" element={<About />} />
        </Routes>
      </PublicLayout>
    </>
  )
};

export default App;
