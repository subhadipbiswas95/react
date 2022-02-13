import React from 'react'

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <Link className='flex items center'  to='/'>

                        <img src="/img/logo.png" alt="logo" style={{ height: 45 }} />

                    </Link>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link ">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/About" className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact" className="nav-link">Contact Us</Link>
                                </li>

                                



                            </ul>


                        </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar
