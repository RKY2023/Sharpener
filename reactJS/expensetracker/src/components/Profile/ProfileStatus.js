import React from "react";
import { Button, Navbar, Nav } from 'react-bootstrap';

const ProfileStatus = (props) => {
    return (
        <div className="d-flex">
        <div className='ml-auto nav navbar-nav navbar-right align-self-end'>
            <div>
                Your Profile is incomplete.
            </div>
            <Button type='button' className='btn-sm'>Complete Now</Button>
        </div>
        </div>
    );
};

export default ProfileStatus;