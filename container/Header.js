import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
    return (
        <nav>
            <div className='ui fixed menu'>
                <div className='ui container center'>
                    <h2>fakeshop</h2>




                </div>
                <h1><center  > <Link to="/cart">My cart

                </Link> </center></h1>
            </div>
        </nav>
    )
}

export default Header