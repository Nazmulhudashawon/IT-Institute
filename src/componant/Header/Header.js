import React from 'react';
import './Header.css'
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import About from '../about/About';
import Home from '../Home/Home';
import Nav from '../Navbar/Nav';
import Services from '../Services/Services'
import Contact from '../Contact/Contact'

const Header = () => {

    return (
        <div>
            <BrowserRouter>
                <Nav></Nav>

                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/services">
                        <Services></Services>
                    </Route>
                    <Route exact path="/about">
                        <About></About>
                    </Route>
                    <Route exact path="/services">
                        <Services></Services>
                    </Route>
                    <Route exact path="/contact">
                        <Contact></Contact>
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    );
};


export default Header;