import React, { useState } from "react";
// import "../../css/login.css";
import PropTypes from "prop-types";
import SignUpForm from "./SignUpForm";
import CardHeader from "../CardHeader";
import CardBottom from "../CardBottom";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
const initValues = {
    fname: "",
    sname: "",
    email: "",
    mobile: "",
    pass: "",
    conpass: "",
};

const Signup = ({ isLoginModalOpen, toggleLoginForm, isSignUpModalOpen, toggleSignUpForm }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(initValues);
    const [agreement, setAgreement] = useState(false);
    const [error, setError] = useState({});

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const handleCheckBox = (event) => {
        setAgreement(event.target.checked);
    };

    const handleSubmit = async (event) => {
        const { error, isValid } = handleError();
        event.preventDefault();
        if (isValid) {
            const { fname, sname, email, mobile, pass } = user;
            const result = await fetch("/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fname,
                    sname,
                    email,
                    mobile,
                    pass,
                }),
            });
            const data = result.json();
            if (result.status === 400 || !data) {
                if (result.status === 400) {
                    const { error } = handleEmail();
                    setError(error);
                    console.log(error);
                } else {
                    window.alert("Invalid Registration");
                    console.log("Invalid Registration");
                }
            } else {
                window.alert("Registration Successfull");
                console.log("Registration Successfull");

                event.target.reset();
                setUser(initValues);
                setAgreement(false);
                navigate("/login");
            }
        } else {
            setError(error);
        }
    };

    const handleEmail = () => {
        const error = {};
        error.email = "Email Already Registered!";
        return { error };
    };

    const handleError = () => {
        const error = {};
        const { fname, sname, email, mobile, pass, conpass } = user;

        if (!fname.trim()) {
            error.fname = "Name Cannot be Empty";
        }
        if (!sname.trim()) {
            error.sname = "Name Cannot be Empty";
        }
        if (!email) {
            error.email = "Email Cannot be Empty";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            error.email = "Email Address is invalid";
        }
        if (!mobile) {
            error.mobile = "Mobile Cannot be Empty";
        } else if (mobile.length !== 11) {
            error.mobile = "Mobile Length Must be 11 Numbers";
        }
        if (!pass) {
            error.pass = "Password Cannot be Empty";
        } else if (pass.length < 6) {
            error.pass = "Password Needs to be 6 Characters or More";
        }
        if (!conpass) {
            error.conpass = "Confirm Password Cannot be Empty";
        } else if (pass !== conpass) {
            error.conpass = "Passwords Do Not Match";
        }
        return {
            error,
            isValid: Object.keys(error).length === 0,
        };
    };

    return (
        <>
            <Modal centered size="lg" isOpen={isSignUpModalOpen} toggle={toggleSignUpForm}>
                <CardHeader title="Sign Up for New Account" />
                <ModalBody className="SignUpBody">
                    <SignUpForm
                        values={user}
                        agreement={agreement}
                        error={error}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleCheckBox={handleCheckBox}
                    />
                    <CardBottom title="Already have an Account? LogIn Now!" toggleForm={toggleLoginForm} />
                </ModalBody>
            </Modal>
        </>
    );
};
Signup.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
    toggleSignUpForm: PropTypes.func.isRequired,
    isLoginModalOpen: PropTypes.bool.isRequired,
    isSignUpModalOpen: PropTypes.bool.isRequired,
};
export default Signup;
