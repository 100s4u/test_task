import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import PostService from '../api/post';

export const Add = (props) => {
    const [post, setPost] = useState([]);

    async function fetchAdd() {
      await PostService.Add(post.text, sessionStorage.getItem('token'));
      props.history.push("/");
    }
    return (
        <div>
            <h1>Create a post</h1>
            <Form>
                <Input placeholder="Post text..." value={post.text} onChange={e => setPost({...post, text: e.target.value})}/>
                <Button type="primary" htmlType="submit" onClick={fetchAdd}>Post</Button>
                <Link to="/">Cancel</Link>
            </Form>
        </div>
    )
}
