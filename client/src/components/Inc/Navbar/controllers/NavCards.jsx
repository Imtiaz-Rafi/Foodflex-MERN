import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavCards = ({ toggleLoginForm }) => {
    const [LoggedIn, setLoggedIn] = useState(false);
    const isLoggedIn = async () => {
        try {
            const res = await fetch("/loggedIn", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await res.json();
            console.log("User Data", data);
            if (res.status === 200) {
                setLoggedIn(true);
            } else {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log("Error from navcard", err);
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

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
            {LoggedIn ? (
                <button className="section-btn" onClick={toggleLoginForm}>
                    <span style={{ margin: "0px 10px 0px 0px" }}>My Account</span>
                    <i class="fa fa-angle-right"></i>
                </button>
            ) : (
                <button className="section-btn" onClick={toggleLoginForm}>
                    <span style={{ margin: "0px 10px 0px 0px" }}>Sign In</span>
                    <i class="fa fa-angle-right"></i>
                </button>
            )}
            {/* <a href="#" className="section-btn">
                            <i class="fa fa-user-circle"></i>
                            <span style={{ margin: "0px 5px" }}>My Account</span>
                            <i class="fa fa-angle-down"></i>
                        </a> */}
            {/* <button className="section-btn" onClick={toggleLoginForm}>
                <span style={{ margin: "0px 10px 0px 0px" }}>Sign In</span>
                <i class="fa fa-angle-right"></i>
            </button> */}
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
