import React, { useState } from 'react'
import Post1 from '../posts/post/Post1'
import { useSelector } from 'react-redux'
import './search.css';

function Search({setcurrentId}) {
  // state.posts is getting from reducer indexe.js
  const posts = useSelector((state) => state.posts);
  const [ival,setival] =  useState('');
  const [newposts, setNewPosts] = useState([]); 
  const handlesearch =()=>{
        setNewPosts(  posts.filter((post)=>ival === post.creator));
        setival('');

  }
  return (
    <div style={{padding:"20px"}}>
      <input type="text" placeholder='Search by id' onChange={(e)=>{setival(e.target.value)}} />
      <button onClick={handlesearch}>Search</button>
    <div className="allposts">
    {!posts.length ? (
        <div className="loader"></div>
      ) : (
        newposts.map((post) => (
          <Post1 setcurrentId={setcurrentId} key={post._id} post={post} />
        ))
      )}
    </div>
   
    
    </div>
  )
}

export default Search;
