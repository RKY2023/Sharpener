import React, { useState } from "react";

import './UserList.css';

const UserList = (props) =>{
    const [userDataUp, setUserDataUp] = useState(props.userData);

    
    console.log(props);
    return (
        <ul className="user-list">
            {userDataUp.map( usr => {return (
                <li key={usr.id} className="user-data">
                    {usr.name} ({usr.age} years old)
                </li> 
            )})}
        </ul>
    )
}

export default UserList;