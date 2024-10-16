import axios from 'axios';
// first api 
// second action 
// third reducer
// place to be used
const url = 'http://localhost:5000/posts';

export const fetchPost = ()=> axios.get(url);
// api to create a post
export const createPost = (newPost)=> axios.post(url,newPost);
// api for updating 
export const updatePost = (id,updatePost)=> axios.patch(`${url}/${id}`,updatePost);
// api for deleteing
export const deletePost = (id)=> axios.delete(`${url}/${id}`);
// api for likecount
export const likePost = (id)=> axios.patch(`${url}/${id}/likePost`);
