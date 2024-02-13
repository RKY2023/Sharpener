import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import ProfileStatus from '../Profile/ProfileStatus';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import ProfileUpdate from '../Profile/ProfileUpdate';
import ProfileData from '../Profile/ProfileData';

const MainHeader = (props) => {
    return (
    <>
    <div className='p-5'>
        <Navbar>
            <Navbar.Brand>Welcome to Expense Tracker</Navbar.Brand>
            <ProfileStatus />
        </Navbar>
        <hr></hr>
    </div>
    <ProfileUpdate />
    <ProfileData />
    </>
    );
};
export default MainHeader;