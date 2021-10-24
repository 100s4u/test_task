import React, { useState, useEffect } from 'react';
import { Heading } from './Heading';
import { PostsList } from './PostsList.js';
import PostService from '../api/post';

export const Home = (props) => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);

    async function fetchPosts() {
      const posts = await PostService.getAll();
      setPosts(posts);
    }
    async function fetchAbout() {
        const _user = await PostService.about(sessionStorage.getItem('token'));
        setUser(_user);
      }
    
    useEffect(() => {
      fetchPosts();
      fetchAbout();
    }, []);
  
    return (
        <div>
            <Heading name={user.name} history={props.history} fetchPosts={fetchPosts}/>
            <PostsList posts={posts} id={user.id}/>
        </div>
    )
}
