import React, { useContext } from "react";
import CartButton from "../Cart/CartButton";
import { Container, Nav, Navbar } from "react-bootstrap";
import EcommerceContext from "../../store/EcommerceContext";
import { useHistory } from "react-router-dom";

const Header = (props) => {
    const history = useHistory();
    const authCtx = useContext(EcommerceContext);

    const logoutHandler = () =>{
        authCtx.logout();
        history.replace('/');
    };

    return (
        <>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="product">Product</Nav.Link>
                        <Nav.Link href="store">Store</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        {!authCtx.isLoggedIn && (
                        <Nav.Link href="login">Login</Nav.Link>    
                        )}
                        <div className="text-white">
                        {authCtx.isLoggedIn == true ? 't':'f'}
                        </div>
                        {authCtx.isLoggedIn && (
                        <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>    
                        )}
                        <Nav.Link href="contact">Contact Us</Nav.Link>
                        <CartButton className="btn-sm" onShowModal={props.onShowModal}/>                            
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header