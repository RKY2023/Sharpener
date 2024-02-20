import React from "react";
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfileStatus = (props) => {
    return (
        <div className="d-flex">
        <div className='ml-auto nav navbar-nav navbar-right align-self-end'>
            <div>
                Your Profile is incomplete.
            </div>
            <Link to='/profile' className='btn-sm'>Complete Now</Link>
        </div>
        </div>
    );
};

export default ProfileStatus;