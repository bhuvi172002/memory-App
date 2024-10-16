import React, { useState,useEffect } from 'react';
import {  AiFillDelete } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
// import moment from 'moment';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux'
import { deletePost  } from '../../../action/posts';
import './post.css';

// ,likePost
// AiFillLike,
function Post1({post,setcurrentId}) {

const [up,setup] = useState(false);
const dispatch = useDispatch();

const user =  JSON.parse(localStorage.getItem('profile'));
useEffect(() => {
  if (user.result.email.split('@')[0]===post.creator) {
         setup(true);
  }
}, [post.creator,user.result.email,setcurrentId]);


  return (
  <Card style={{ overflow:"hidden", margin:'10px', height:'410px', width: '15rem' }}>
 {up && <div className="update"><HiDotsVertical onClick={()=>setcurrentId(post._id)} style={{color:'white' , cursor:"pointer", height:'20px',width:'20px'}}></HiDotsVertical></div>} 
  <Card.Img variant="top" style={{height:'190px'}} src={post.selectedFile} />
  <Card.Body>

    <Card.Text style={{fontWeight:"500" , color:"#204b3b"}}>{post.title}</Card.Text>
    <Card.Text className='tst' style={{fontSize:"12px", color:"#204b3b" , height:"80px" }} >{post.message}</Card.Text>
    <Card.Text style={{fontSize:"12px", color:"#204b3b"}}>  {post.tags.map((tag)=>(`#${tag} `))}</Card.Text>
  </Card.Body>
    <div className="buttons">
    {/* {post.likecount} */}
    {/* <AiFillLike onClick={()=>dispatch(likePost(post._id))} /> */}
   {up && <AiFillDelete style={{cursor:"pointer"}} onClick={()=>dispatch(deletePost(post._id))}  /> } 
    <p className='hello'>{post.creator}</p>
    </div>
</Card>
  )
}

export default Post1



