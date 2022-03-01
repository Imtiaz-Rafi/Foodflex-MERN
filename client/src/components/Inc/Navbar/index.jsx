import React from "react";
import Logo from "./controllers/Logo";
import NavLinks from "./controllers/NavLinks";
import NavCards from "./controllers/NavCards";

const Navbar = () => {
    return (
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div className="container">
                <Logo />
                {/* MENU LINKS */}
                <div className="collapse navbar-collapse">
                    <NavLinks />
                    <NavCards />
                </div>
            </div>
        </section>
    );
};

export default Navbar;
