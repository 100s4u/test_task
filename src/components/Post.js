import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostService from '../api/post';

export const Post = () => {
    const [post, setPost] = useState([]);

    async function fetchPost() {
      const id = window.location.href.match(/\d*$/)[0];
      const post = await PostService.getOne(id);
      setPost(post);
    }

    useEffect(() => {
      fetchPost();
    }, []);
    return (
        <div>
            <h1>Post {post.id}</h1>
            <div className="Post__text">
                <span>{post.text}</span>
            </div>
            <Link className="Post_link" to="/">Back</Link>
        </div>
    )
}
