import React from "react";
import PropTypes from "prop-types";
import Login from "./login";

// const Auth = ({ toggleLoginForm, toggleSignUpForm, isLoginModalOpen, isSignUpModalOpen }) => {
const Auth = ({ toggleLoginForm, isLoginModalOpen }) => {
    return (
        isLoginModalOpen && <Login toggleLoginForm={toggleLoginForm} isLoginModalOpen={isLoginModalOpen} />
        // (isSignUpModalOpen && <div>Hello</div>)
    );
};

Auth.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
    // toggleSignUpForm: PropTypes.func.isRequired,
    isLoginModalOpen: PropTypes.bool.isRequired,
    // isSignUpModalOpen: PropTypes.bool.isRequired,
};

export default Auth;
