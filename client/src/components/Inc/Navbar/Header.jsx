import React from "react";
import Logo from "./controllers/Logo";
import NavLinks from "./controllers/NavLinks";
import NavCards from "./controllers/NavCards";

import PropTypes from "prop-types";

const Header = ({ toggleForm }) => {
    return (
        <section className="navbar custom-navbar navbar-fixed-top navbar-home" role="navigation">
            <div className="container">
                <Logo />
                {/* MENU LINKS */}
                {/* <div className="collapse navbar-collapse"> */}
                <div className="collapse navbar-collapse">
                    <NavLinks />
                    <NavCards toggleForm={toggleForm} />
                </div>
            </div>
        </section>
    );
};
Header.propTypes = {
    toggleForm: PropTypes.func.isRequired,
};

export default Header;
