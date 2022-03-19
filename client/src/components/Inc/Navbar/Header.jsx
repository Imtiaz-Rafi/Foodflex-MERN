import React from "react";
import Logo from "./controllers/Logo";
import NavLinks from "./controllers/NavLinks";
import NavCards from "./controllers/NavCards";

import PropTypes from "prop-types";

const Header = ({ toggleLoginForm, LoggedIn, isLoggedIn }) => {
    return (
        <section className="navbar custom-navbar navbar-fixed-top navbar-home" role="navigation">
            <div className="container">
                <Logo />
                <div className="collapse navbar-collapse">
                    <NavLinks />
                    <NavCards toggleLoginForm={toggleLoginForm} LoggedIn={LoggedIn} isLoggedIn={isLoggedIn} />
                </div>
            </div>
        </section>
    );
};
Header.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.func.isRequired,
    LoggedIn: PropTypes.bool.isRequired,
};

export default Header;
