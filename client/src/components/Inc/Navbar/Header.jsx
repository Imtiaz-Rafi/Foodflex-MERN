import React from "react";
import Logo from "./controllers/Logo";
import NavLinks from "./controllers/NavLinks";
import NavCards from "./controllers/NavCards";

import PropTypes from "prop-types";

const Header = ({ toggleLoginForm }) => {
    return (
        <section className="navbar custom-navbar navbar-fixed-top navbar-home" role="navigation">
            <div className="container">
                <Logo />
                {/* MENU LINKS */}
                {/* <div className="collapse navbar-collapse"> */}
                <div className="collapse navbar-collapse">
                    <NavLinks />
                    <NavCards toggleLoginForm={toggleLoginForm} />
                </div>
            </div>
        </section>
    );
};
Header.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
};

export default Header;
