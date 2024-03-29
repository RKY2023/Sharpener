import React, { useContext } from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import ProfileStatus from '../Profile/ProfileStatus';
import { Switch, useHistory } from 'react-router-dom/cjs/react-router-dom';
import ExpenseContext from '../../store/ExpenseContext';

const MainHeader = (props) => {
    const history = useHistory();
    const authCtx = useContext(ExpenseContext);

    const logoutHandler = (e) => {
        e.preventDefault();
        authCtx.logout();
        history.replace('/auth');
    }

    return (
    <>
    <div className='p-5'>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Welcome to Expense Tracker</Navbar.Brand>
                <ProfileStatus />
                <Button className='m-3 btn-danger' onClick={logoutHandler}>Logout</Button>
            </Container>
        </Navbar>
        <hr></hr>
    </div>
    </>
    );
};
export default MainHeader;