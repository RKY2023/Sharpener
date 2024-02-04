import React from "react";
import Cart from "../Cart/Cart";
import { Container, Navbar } from "react-bootstrap";

const Header = (props) => {
    return (
        <>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        Ecommerce
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
        // <header>
        //     <ul>
        //         <li>Home</li>
        //         <li>Store</li>
        //         <li>About</li>
        //     </ul>
        //     <Cart />
        // </header>
    )
}

export default Header