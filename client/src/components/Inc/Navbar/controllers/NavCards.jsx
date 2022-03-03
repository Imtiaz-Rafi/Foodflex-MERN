import React from "react";

const NavCards = () => {
    return (
        <ul className="nav navbar-nav navbar-right">
            <li className="cart_link">
                <a href="#footer" className="smoothScroll">
                    <i class="fa fa-shopping-cart"></i>
                </a>
            </li>
            <li>
                <a href="#reservation">
                    <i className="fa fa-phone" /> Reserve a table
                </a>
            </li>
            {/* WILL USE LATER */}
            {/* <a href="#" className="section-btn">
                            <i class="fa fa-user-circle"></i>
                            <span style={{ margin: "0px 5px" }}>My Account</span>
                            <i class="fa fa-angle-down"></i>
                        </a> */}
            <a href="#footer" className="section-btn">
                <span style={{ margin: "0px 10px 0px 0px" }}>Sign In</span>
                <i class="fa fa-angle-right"></i>
            </a>
        </ul>
    );
};

export default NavCards;
