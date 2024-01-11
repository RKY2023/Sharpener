import React, { useState } from "react";


import UserForm from "./UserForm";
import UserList from "./UserList";
// import './Users.css';
import Card from "../UI/Card";




const Users = (props) => {
    const [usersData, setUsersData] = useState([
        {
            id: '1',
            name: 'gover dhan bnabu',
            age: 23,
            collegeName: 'XYZ'
        },
        {
            id: '2',
            name: 'tatya bichuu',
            age: 56,
            collegeName: 'ABC'
        }
    ]);

    const addUserHandler = (data) =>{
        setUsersData((prevUsersData) =>{
            return [...prevUsersData, data];
        });
    };

    return (
        <>  
            <UserForm onAddUser={addUserHandler}/>
            <UserList userData={usersData}/>
        </>
    )
}

export default Users;