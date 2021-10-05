import React from 'react';
import './Header.css'
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import About from '../about/About';
import Home from '../Home/Home';
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Menu from '../Menubar/Menu';

const Header = () => {

    return (
        <div>
            <BrowserRouter>
                <Menu></Menu>

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
                    <Route exact path="">
                        <h1 className="error">404 Not Found</h1>
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    );
};


export default Header;