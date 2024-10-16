import * as api from '../api';

//action creators 
// thunk is used to dispatch the async data with this crazy syntax
// if action are action creator and asyns we use thunk 
export const getposts = ()=> async (dispatch)=>{

    try {
        const {data} = await api.fetchPost();
        dispatch({type:'FETCH_ALL' ,payload : data}) ;

    } catch (error) {
        console.log(error)
    }

}


export const createPost = (post)=> async(dispatch)=>{
try {
    // making api request to create post 
    const {data} = await api.createPost(post);
    dispatch({type:'CREATE' ,payload:data})
} catch (error) {
    console.log(error);
}
}


export const updatePost = (id,post)=>async(dispatch)=>{
    
    try {
        const {data} = await api.updatePost(id,post);
        dispatch({type:'UPDATE' ,payload:data})
        
    } catch (error) {
        
        console.log(error);
    }
    
}

export const deletePost = (id)=>async(dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({type:'DELETE', payload:id});
    } catch (error) {
           console.log(error);
        
       }
}
export const likePost = (id)=>async(dispatch)=>{
    
    try {
        const {data} = await api.likePost(id);
        dispatch({type:'LIKE' ,payload:data})
        
    } catch (error) {
        
        console.log(error);
    }
    
}

