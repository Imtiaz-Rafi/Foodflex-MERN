import React, { useState } from "react";
import Logo from "./controllers/Logo";
import NavLinks from "./controllers/NavLinks";
import NavCards from "./controllers/NavCards";
// import TodoForm from "./todoForm";

import PropTypes from "prop-types";

const Navbar = ({ toggleForm }) => {
    return (
        <section className="navbar custom-navbar navbar-fixed-top top-nav-collapse">
            <div className="container">
                <Logo />
                {/* MENU LINKS */}
                {/* <div className="collapse navbar-collapse"> */}
                <div className="collapse navbar-collapse">
                    {/* <NavLinks /> */}
                    <NavCards toggleForm={toggleForm} />
                </div>
            </div>
        </section>
    );
};

Navbar.propTypes = {
    toggleForm: PropTypes.func.isRequired,
};

export default Navbar;
