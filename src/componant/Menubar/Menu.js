import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



import './Menu.css'

const Menu = () => {
    return (
        <div className="header">
            <h4> Error Solution IT</h4>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle className="navbar-dark" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/services">Service</Link>
                            <Link className="link" to="/about">About Us</Link>
                            <Link className="link" to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>





    );
};

export default Menu;