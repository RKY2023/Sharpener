import React from "react";
import Cart from "../Cart/Cart";

const Header = (props) => {
    return (
        <header>
            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>About</li>
            </ul>
            <Cart />
        </header>
    )
}

export default Header