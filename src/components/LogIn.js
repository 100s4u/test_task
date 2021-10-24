import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import PostService from '../api/post';


export const LogIn = (props) => {
    const [user, setUser] = useState([{
        email: '',
        pswd: ''
    }]);

    const login = async event => {
        event.preventDefault();
        const response = await PostService.Login(user.email, user.pswd);
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('email', user.email);
        props.history.push("/");
    }

    return (
        <div>
            <h1>Login</h1>
            <Form>
                <Input placeholder="Email" type="text" value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                <Input placeholder="Password" type="password" value={user.pswd} onChange={e => setUser({...user, pswd: e.target.value})}/>
                <Button type="primary" htmlType="submit" onClick={login}>Login</Button>
                <Link to="/">Cancel</Link>
            </Form>
        </div>
    )
}
