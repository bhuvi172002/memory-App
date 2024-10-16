import React from 'react'
import Post1 from '../posts/post/Post1'
import { useSelector } from 'react-redux'


function Profile({setcurrentId}) {
  // state.posts is getting from reducer indexe.js
  const posts = useSelector((state) => state.posts);
  const user =  JSON.parse(localStorage.getItem('profile'));

  const email = user.result.email
  const username = email.split('@')[0];
  const filteredpost = posts.filter((post)=>post.creator === username)

  return (
    <>
  
    <div className="allposts">
    {!posts.length ? (
        <div className="loader"></div>
      ) : (
        filteredpost.map((post) => (
          <Post1 setcurrentId={setcurrentId} key={post._id} post={post} />
        ))
      )}
    </div>
   
    
    </>
  )
}

export default Profile;
