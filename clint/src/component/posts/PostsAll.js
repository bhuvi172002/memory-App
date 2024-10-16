import React from 'react'
import Post1 from './post/Post1'
import { useSelector } from 'react-redux'
import './postsall.css'

function PostsAll({setcurrentId}) {
  // state.posts is getting from reducer indexe.js
  const posts = useSelector((state) => state.posts);
  console.log( " all posts hello ",posts);
  return (
    <>
  
    <div className="postscontainer">
    {!posts.length ? (
        <div className="loader"></div>
      ) : (
        posts.map((post) => (
          <Post1 setcurrentId={setcurrentId} key={post._id} post={post} />
        ))
      )}
    </div>
   
    
    </>
  )
}

export default PostsAll
