import React from "react";
import Logo from "./controllers/Logo";
import NavCards from "./controllers/NavCards";

import PropTypes from "prop-types";

const Navbar = ({ toggleLoginForm, LoggedIn, isLoggedIn }) => {
    return (
        <section className="navbar custom-navbar navbar-fixed-top top-nav-collapse">
            <div className="container">
                <Logo />
                <div className="collapse navbar-collapse">
                    <NavCards toggleLoginForm={toggleLoginForm} LoggedIn={LoggedIn} isLoggedIn={isLoggedIn} />
                </div>
            </div>
        </section>
    );
};

Navbar.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.func.isRequired,
    LoggedIn: PropTypes.bool.isRequired,
};

export default Navbar;
