import React from "react";
import CartButton from "../Cart/CartButton";
import { Container, Nav, Navbar } from "react-bootstrap";
import Products from "../../pages/Products";

const Header = (props) => {
    return (
        <>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="store">Store</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="contact">Contact Us</Nav.Link>
                        <CartButton className="btn-sm" onShowModal={props.onShowModal}/>                            
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header