import React from 'react'
import Form1 from '../form/Form1';
import {useState, useEffect } from 'react';
import PostsAll from '../posts/PostsAll';
import { useDispatch } from 'react-redux';
import{getposts } from '../../action/posts';
import Navbar from '../nav/Navbar';
import Profile from '../profile/Profile';
import Search from '../search/Search';
import './home.css';
function Home() {


    const [currentId , setcurrentId] = useState(null);
    const [Home,setHome] = useState(true);
    const [Profile1,setProfile] = useState(false);
    const [Search1,setSearch] = useState(false);
  const dispatch  = useDispatch();
  useEffect(()=>{
dispatch(getposts());
  },[dispatch]);



  return (
    <div className='homemain'>
    <Navbar Search={Search1} setSearch={setSearch} Home={Home} Profile={Profile1} setHome={setHome} setProfile={setProfile}></Navbar>
{Home &&  <PostsAll  setcurrentId={setcurrentId} ></PostsAll>}

   {Profile1 &&  <div className="workspace">
     <Profile setcurrentId={setcurrentId}></Profile>
    <Form1 currentId={currentId} setcurrentId={setcurrentId} ></Form1>
    
      </div> }
   
  {Search1 && <Search setcurrentId={setcurrentId}></Search>}
      </div>
  )
}

export default Home
