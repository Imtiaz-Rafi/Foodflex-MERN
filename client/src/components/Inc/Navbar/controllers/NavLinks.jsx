import React from "react";
// import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="nav navbar-nav navbar-nav-first">
            <li>
                <a href="#home" className="smoothScroll">
                    Home
                </a>
            </li>
            <li>
                <a href="#about" className="smoothScroll">
                    About
                </a>
            </li>
            <li>
                <a href="#menu" className="smoothScroll">
                    Menu
                </a>
            </li>
            <li>
                <a href="#contact" className="smoothScroll">
                    Contact
                </a>
            </li>
            {/* <li>
                <Link to="#home" className="smoothScroll">
                    Home
                </Link>
            </li>
            <li>
                <Link to="#about" className="smoothScroll">
                    About
                </Link>
            </li>
            <li>
                <Link to="#menu" className="smoothScroll">
                    Menu
                </Link>
            </li>
            <li>
                <Link to="#contact" className="smoothScroll">
                    Contact
                </Link>
            </li> */}
        </ul>
    );
};

export default NavLinks;
