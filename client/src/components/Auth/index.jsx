import React from "react";
import PropTypes from "prop-types";
import Login from "./login";
import Signup from "./register";

const Auth = ({ toggleLoginForm, toggleSignUpForm, isLoginModalOpen, isSignUpModalOpen, isLoggedIn }) => {
    return (
        (isLoginModalOpen && (
            <Login
                isLoggedIn={isLoggedIn}
                toggleLoginForm={toggleLoginForm}
                isLoginModalOpen={isLoginModalOpen}
                toggleSignUpForm={toggleSignUpForm}
                isSignUpModalOpen={isSignUpModalOpen}
            />
        )) ||
        (isSignUpModalOpen && (
            <Signup
                isLoggedIn={isLoggedIn}
                toggleLoginForm={toggleLoginForm}
                isLoginModalOpen={isLoginModalOpen}
                toggleSignUpForm={toggleSignUpForm}
                isSignUpModalOpen={isSignUpModalOpen}
            />
        ))
    );
};

Auth.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
    toggleSignUpForm: PropTypes.func.isRequired,
    isLoginModalOpen: PropTypes.bool.isRequired,
    isSignUpModalOpen: PropTypes.bool.isRequired,
};

export default Auth;
