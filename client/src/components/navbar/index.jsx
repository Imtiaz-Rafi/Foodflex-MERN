import React from "react";

const Navbar = () => {
    return (
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon icon-bar" />
                        <span className="icon icon-bar" />
                        <span className="icon icon-bar" />
                    </button>
                    {/* lOGO TEXT HERE */}
                    <a href="index.html" className="navbar-brand">
                        FoodFlex
                    </a>
                </div>
                {/* MENU LINKS */}
                <div className="collapse navbar-collapse">
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
                            <a href="#team" className="smoothScroll">
                                Chef
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
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li className="cart_link">
                            <a href="#" className="smoothScroll">
                                <i class="fa fa-shopping-cart"></i>
                            </a>
                        </li>
                        <li className="user_link">
                            <a href="#" className="smoothScroll">
                                <i class="fa fa-user-circle"></i>
                            </a>
                        </li>
                        {/* <li>
                            <a href="#">
                                <i class="fa fa-search"></i>
                            </a>
                        </li> */}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">
                                Call Now! <i className="fa fa-phone" /> 010 020 0340
                            </a>
                        </li>
                        <a href="#footer" className="section-btn">
                            Reserve a table
                        </a>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
