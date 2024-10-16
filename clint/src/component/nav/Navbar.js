import React, { useState } from 'react'
import {useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './nav.css';

function Navbar({setSearch,Search,Home,Profile,setHome,setProfile}) {
    // const user = null;
    const [user,setuser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();

    
    const handellogout = ()=>{
          dispatch({type:'LOGOUT',})
          history.push('/');
          setuser(null);

    }
    const handlehome = ()=>{
      if(!Home){
         setHome(true)
         setProfile(false)
         setSearch(false)
      }
    }
    const handleprofile = ()=>{
      if(!Profile){
        setProfile(true)
        setHome(false)
        setSearch(false)
      }
    }
    const handlesearch = ()=>{
      if(!Search){
        setSearch(true)
        setProfile(false)
        setHome(false)
      }
    }
  return (
    <div className='navbarr'>
      {user && (
        <>
           
       <div className='welcome'>
         <h4><span>{user.result.name[0]}</span > Welcome! {user.result.name}         </h4> 
       </div>
           <div className='welcomein'>
       <span> <h6 onClick={handlehome}>Home</h6></span>
       <span><h6 onClick={handleprofile}>Profile</h6></span>
       <span><h6 onClick={handlesearch}>Search</h6></span>
       </div>
       
       
            </>
      )
    }
    <button onClick={handellogout}>Logout</button>
    </div>
  )
}

export default Navbar
