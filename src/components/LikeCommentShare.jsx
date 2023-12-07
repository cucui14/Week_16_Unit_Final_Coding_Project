import { useState } from 'react';

const LikeCommentShare = ({ handleShow, post, handleModalPost, setLikes }) => {
    const [liked, setLiked] = useState(false); // State to track if the post is liked

    const toggleLike = () => {
        setLiked(prevLiked => !prevLiked); // Toggle liked state
        setLikes(likes => (likes === post.reaction ? likes + 1 : post.reaction)); // Toggle likes
        // You can perform an API call here to update the post with the new likes count
        console.log(post.reaction);
    };

    return ( 
        <>
            <ul className="p-1 d-flex list-unstyled">
                <li className="pe-2">
                    <button
                        className={`border-0 bg-transparent${liked ? ' text-danger' : ' text-primary'}`} // Add 'liked' class if the post is liked
                        onClick={toggleLike}
                    >
                        <svg height="24" role="img" width="24">
                        {/* Outline of the heart */}
                        <path
                            d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"
                                stroke={liked ? 'red' : '#0D6EFD'}
                            strokeWidth='.25'    
                            fill={liked ? 'red' : '#0D6EFD'}
                        />
                        {/* Interior of the heart*/}
                        <path
                            d="M 11 19 C 11 19 11 19 8 17 C 8 17 7 16 5 14 C 3 12 2 9.9 2 7.5 C 2 5.5 4.5 4 7 4 c 1.6 0 3.2 1.1 4 2.6 C 11.8 5.1 13.4 4 15 4 c 2.5 0 5 1.5 5 3.5 c 0 2.4 -1 4.5 -3 6.5 c -1 1 -2 2 -3 3 z"
                            fill={liked ? 'red' : 'none'}
                        />
                        </svg>

                        <span className="visually-hidden">{liked ? 'Unlike post' : 'Like post'}</span>
                    </button>
                </li>
                <li className="pe-2">
                    <button className='border-0 bg-transparent text-primary' onClick={() => {
                        handleShow()
                        handleModalPost(post)
                    }}>
                            <svg height="24" role="img" width="24" fill="none" stroke="currentColor" strokeWidth="2" className="button-hover">
                                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"></path>
                            </svg>
                            <span className="visually-hidden">Comment post</span>
                        </button>
                </li>
                <li className="pe-2">
                        <button className='border-0 bg-transparent text-primary'>
                            <svg fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24" className="button-hover">
                                <title>Share Post</title>
                                <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                            </svg>
                            <span className="visually-hidden">Share post</span>
                    </button>
                </li>
            </ul>
        </>
     );
}
 
export default LikeCommentShare;