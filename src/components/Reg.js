import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import PostService from '../api/post';


export const Reg = (props) => {
    const [error, setError] = useState('');
    const [user, setUser] = useState([{
        name: '',
        email: '',
        pswd: '',
        pswd_cf: ''
    }]);

    async function fetchReg() {
        const response = await PostService.Reg(user.name, user.email, user.pswd, user.pswd_cf);
        if(response){
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('email', user.email);
            props.history.push("/");
        }else{
            setError('Error');
        }
    }
    return (
        <div>
            <h1>Registration</h1>
            <h2 className="Error">{error}</h2>
            <Form>
                <Input placeholder="Name" type="text" value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
                <Input placeholder="Email" type="text" value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                <Input placeholder="Password" type="password" value={user.pswd} onChange={e => setUser({...user, pswd: e.target.value})}/>
                <Input placeholder="Password again" type="password" value={user.pswd_cf} onChange={e => setUser({...user, pswd_cf: e.target.value})}/>
                <Button type="primary" htmlType="submit" onClick={fetchReg}>Register</Button>
                <Link to="/">Cancel</Link>
            </Form>
        </div>
    )
}
