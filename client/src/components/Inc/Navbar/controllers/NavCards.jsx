import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavCards = ({ toggleLoginForm }) => {
    return (
        <ul className="nav navbar-nav navbar-right">
            <li className="cart_link">
                <a href="#footer" className="smoothScroll">
                    <i class="fa fa-shopping-cart"></i>
                </a>
            </li>
            <li>
                <Link to="/reservation">
                    <i className="fa fa-phone" /> Reserve a table
                </Link>
                {/* <a href="#reservation">
                    <i className="fa fa-phone" /> Reserve a table
                </a> */}
            </li>
            {/* WILL USE LATER */}
            {/* <a href="#" className="section-btn">
                            <i class="fa fa-user-circle"></i>
                            <span style={{ margin: "0px 5px" }}>My Account</span>
                            <i class="fa fa-angle-down"></i>
                        </a> */}
            <button className="section-btn" onClick={toggleLoginForm}>
                <span style={{ margin: "0px 10px 0px 0px" }}>Sign In</span>
                <i class="fa fa-angle-right"></i>
            </button>
            {/* <a href="#footer" className="section-btn">
                <span style={{ margin: "0px 10px 0px 0px" }}>Sign In</span>
                <i class="fa fa-angle-right"></i>
            </a> */}
        </ul>
    );
};
NavCards.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
};

export default NavCards;
