import React, { useState } from "react";
import Logo from "./controllers/Logo";
import NavLinks from "./controllers/NavLinks";
import NavCards from "./controllers/NavCards";
// import TodoForm from "./todoForm";

import PropTypes from "prop-types";

const Navbar = ({ toggleLoginForm }) => {
    return (
        <section className="navbar custom-navbar navbar-fixed-top top-nav-collapse">
            <div className="container">
                <Logo />
                {/* MENU LINKS */}
                <div className="collapse navbar-collapse">
                    <NavCards toggleLoginForm={toggleLoginForm} />
                </div>
            </div>
        </section>
    );
};

Navbar.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
};

export default Navbar;
