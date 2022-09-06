import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        count = count + 1;
    }, [cart, cartCount])
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>



                <h1 ><center  > <Link to="/cart">My cart

                </Link> </center></h1>



            </div>
        </nav>
    )
}

export default Navbar;