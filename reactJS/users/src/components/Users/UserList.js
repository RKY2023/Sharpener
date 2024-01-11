import React, { useState } from "react";

import classes from './UserList.module.css';
import Card from "../UI/Card";

const UserList = (props) =>{
    // const [userDataUp, setUserDataUp] = useState(props.userData);

    
    // console.log(userDataUp);
    return (
        <Card className={classes.users}>
            <ul>
                {props.userData.map( usr => {return (
                    <li key={usr.id}>
                        {usr.name} ({usr.age} years old) | {usr.collegeName}
                    </li> 
                )})}
            </ul>
        </Card>
    )
}

export default UserList;