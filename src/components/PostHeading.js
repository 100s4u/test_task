import React from 'react';
import { Link } from 'react-router-dom';

export const PostHeading = (props) => {

    const LogOut = () =>{
        props.fetchPosts();
        props.history.push("/login");
        sessionStorage.clear();
    }
    return (
        <div>
            <div className="Nav">
                <h1>Home</h1>
                {sessionStorage.getItem('token') ?
                        <div className="User__block">
                            <span>{props.name}</span>
                            <button className="LogOut" onClick={LogOut}>Log Out</button>
                        </div>
                        :
                        <div>
                            <Link className="Link" to="/login">Login</Link>
                            <Link className="Link" to="/reg">Reg</Link>
                        </div>
                }
            </div>
        </div>)
}
