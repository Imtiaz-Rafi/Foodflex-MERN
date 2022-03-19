import React, { useState } from "react";
// import "../../css/login.css";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import CardHeader from "../CardHeader";
import CardBottom from "../CardBottom";
import SocialLinks from "../SocialLinks";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";

const initValues = {
    email: "",
    pass: "",
};

const Login = ({ isLoginModalOpen, toggleLoginForm, isSignUpModalOpen, toggleSignUpForm, isLoggedIn }) => {
    const [user, setUser] = useState(initValues);
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState({});

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
        setError({
            [event.target.name]: "",
        });
    };
    const handleCheckBox = (event) => {
        setRemember(event.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, isValid } = handleError();

        if (isValid) {
            const { email, pass } = user;
            const result = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    pass,
                }),
            });
            const data = result.json();
            if (result.status === 404 || !data) {
                const error = {};
                // const { email, pass } = user;
                error.email = ".";
                error.pass = "Invalid Email or Password";
                setError(error);
            } else if (result.status === 400) {
                window.alert("Something Failed at 400");
                console.log("Something Failed at 400");
            } else {
                isLoggedIn();
                event.target.reset();
                setUser(initValues);
                toggleLoginForm();
            }
        } else {
            setError(error);
        }
    };

    const handleError = () => {
        const error = {};
        const { email, pass } = user;
        if (!email) {
            error.email = "Email Cannot be Empty";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            error.email = "Email Address is invalid";
        }
        if (!pass) {
            error.pass = "Password Cannot be Empty";
        } else if (pass.length < 6) {
            error.pass = "Password Needs to be 6 Characters or More";
        }
        return {
            error,
            isValid: Object.keys(error).length === 0,
        };
    };

    return (
        <>
            <Modal centered size="" isOpen={isLoginModalOpen} toggle={toggleLoginForm}>
                <CardHeader title="Log in to Your Account" />
                <ModalBody className="Login-Body">
                    <LoginForm
                        values={user}
                        error={error}
                        remember={remember}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleCheckBox={handleCheckBox}
                    />
                    <div className="forgot-pass">
                        <Link to="#">Forgot Password?</Link>
                    </div>
                    <SocialLinks />
                    <CardBottom title="Don't have an account? Sign Up" toggleForm={toggleSignUpForm} />
                </ModalBody>
            </Modal>
        </>
    );
};
Login.propTypes = {
    isLoggedIn: PropTypes.func.isRequired,
    toggleLoginForm: PropTypes.func.isRequired,
    toggleSignUpForm: PropTypes.func.isRequired,
    isLoginModalOpen: PropTypes.bool.isRequired,
    isSignUpModalOpen: PropTypes.bool.isRequired,
};

export default Login;
