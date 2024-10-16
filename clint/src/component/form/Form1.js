import React, { useState,useEffect } from 'react'
import FileBase from 'react-file-base64';
import {useDispatch,useSelector} from 'react-redux';
import { createPost,updatePost } from '../../action/posts';
import { useHistory } from 'react-router-dom';
function Form1({currentId ,setcurrentId}) {
const history =  useHistory();
  const dispatch =  useDispatch();
  const user =  JSON.parse(localStorage.getItem('profile'));
  const email = user.result.email
    const username = email.split('@')[0];
  const [postData,setpostData] = useState({
    creator:username,title:'',message:'',tags:'',selectedFile:'',
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
  
    if(currentId){

      dispatch(updatePost(currentId,postData))
    }else{

      dispatch(createPost(postData));
    }
   
    clear();
  }



  const clear = (e)=>{
   setcurrentId(null);
   setpostData({
    creator:username,title:'',message:'',tags:'',selectedFile:'',
  });

       
  }


  // when we update the values should be displayed in the form to do that we use 
  const post =  useSelector((state) => currentId ? state.posts.find((p)=> p._id === currentId) : null);
  useEffect(()=>{
    
    if(post) {setpostData(post)};
        
      },[post])
  return (
    <div className='formcon'>
      <form action="" onSubmit={handleSubmit}>
          <h1>{ currentId ? 'Updating' : 'Creating'} a memory</h1>
             {/* to change only one value on the postDataobject we use ... */}
            {/* <input value={postData.creator} onChange={(e) => {setpostData({ ...postData, creator:e.target.value})}} name='creator' type="text" placeholder='creator' /> */}
            <input required value={postData.title} onChange={(e) => {setpostData({ ...postData, title:e.target.value})}} name='title' type="text" placeholder='title' />
            <textarea rows={6}  required value={postData.message} onChange={(e) => {setpostData({ ...postData, message:e.target.value})}} name='message' type="text" placeholder='message' />
            <input required value={postData.tags} onChange={(e) => {setpostData({ ...postData, tags:e.target.value.split(',')})}} name='tags' type="text" placeholder='tags' />
     {/* to add afile we use filebase  */}
            <div>
              <FileBase
              type='file' multiple={false} onDone={({base64})=> setpostData({...postData,selectedFile:base64})}
               className={"file"}
              />
            </div>
            <button type='submit'>submit</button>
            <button onClick={()=>{history.push('/Auth');}} >clear</button>
      </form>
    </div>
  )
}

export default Form1;
