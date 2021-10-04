import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import './Nav.css'

const Nav = () => {
    return (

        <div className="header">
            <div><h4>Dream IT Institute</h4></div>
            <div className="navlink"  > <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/services">Service</NavLink>
                <NavLink className="link" to="/about">About Us</NavLink>
                <NavLink className="link" to="/contact">Contact</NavLink></div>
        </div>



    );
};

export default Nav;