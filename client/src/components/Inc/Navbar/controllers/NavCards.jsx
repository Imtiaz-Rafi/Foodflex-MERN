import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AccountDropDown from "./AccountDropDown";

const NavCards = ({ toggleLoginForm, LoggedIn, isLoggedIn }) => {
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
            </li>
            {LoggedIn ? (
                <AccountDropDown isLoggedIn={isLoggedIn} />
            ) : (
                <button className="section-btn" onClick={toggleLoginForm}>
                    <span style={{ margin: "0px 10px 0px 0px" }}>Sign In</span>
                    <i class="fa fa-angle-right"></i>
                </button>
            )}
        </ul>
    );
};
NavCards.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.func.isRequired,
    LoggedIn: PropTypes.bool.isRequired,
};

export default NavCards;
