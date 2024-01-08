import React, { useState } from "react";


import UserForm from "./UserForm";
import UserList from "./UserList";
import './Users.css';


const Users = (props) => {
    const [usersData, setUsersData] = useState([
        {
            id: '1',
            name: 'gover dhan bnabu',
            age: 23,
        },
        {
            id: '2',
            name: 'tatya bichuu',
            age: 56,
        }
    ]);

    const addUserHandler = (data) =>{
        const newUserData = {
            ...data,
            id: Math.random().toString(),
        };
        console.log(newUserData);
        // const newUsersData = {
        //     ...usersData,
        //     newUserData,
        // }
        usersData.push(newUserData);
        setUsersData(usersData);
    };

    return (
        <div>
            <UserForm onAddUser={addUserHandler}/>
            <UserList userData={usersData}/>
        </div>
    )
}

export default Users;