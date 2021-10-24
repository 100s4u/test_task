import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import PostService from '../api/post';

export const Edit = (props) => {
    const [post, setPost] = useState([]);

    async function fetchPost() {
      const id = window.location.href.match(/\d*$/)[0];
      const post = await PostService.getOne(id);
      setPost(post);
    }
    async function fetchEdit() {
      const id = window.location.href.match(/\d*$/)[0];
      await PostService.Edit(id, post.text, sessionStorage.getItem('token'));
      props.history.push("/");
    }
    async function fetchDelete() {
        const id = window.location.href.match(/\d*$/)[0];
        await PostService.Del(id, sessionStorage.getItem('token'));
        props.history.push("/");
      }

    useEffect(() => {
      fetchPost();
    }, []);
    return (
        <div>
            <h1>Edit a post</h1>
            <Form>
                <Input placeholder="Post text..." value={post.text} onChange={e => setPost({...post, text: e.target.value})}/>
                <Button className="Btn" type="primary" htmlType="submit" onClick={fetchEdit}>Post</Button>
                <Button className="Btn" onClick={fetchDelete}>Delete</Button>
                <Link className="Link" to="/">Cancel</Link>
            </Form>
        </div>
    )
}
