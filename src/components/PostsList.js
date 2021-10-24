import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';

export const PostsList = (props) => {
    function isMine(id, user_id1, user_id2){
        if(user_id1 === user_id2){
            return (
                <div>
                    <Link to={"/edit/"+ id}>Edit</Link>
                </div>
            )
        }
    }
    return (
        <List
            bordered
            dataSource={props.posts}
            renderItem={item => (
                <List.Item>
                    {item.text}
                    {isMine(item.id, item.user_id, props.id)}
                </List.Item>
            )}
        />
    )
}
