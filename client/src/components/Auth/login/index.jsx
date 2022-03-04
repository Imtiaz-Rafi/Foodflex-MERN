import React, { useState } from "react";
// import "../../css/login.css";
import LoginForm from "./LoginForm";
import CardHeader from "../CardHeader";
import CardBottom from "../CardBottom";
import { useNavigate } from "react-router-dom";

const initValues = {
    email: "",
    pass: "",
};

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(initValues);
    const [error, setError] = useState({});

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
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
            if (result.status === 404) {
                window.alert("Invalid Email or Password");
                console.log("Invalid Email or Password");
            } else if (result.status === 400) {
                window.alert("Something Failed at 400");
                console.log("Something Failed at 400");
            } else if (!data) {
                window.alert("Something Failed");
                console.log("Something Failed");
            } else {
                window.alert("Login Successfull");
                console.log("Login Successfull");

                event.target.reset();
                setUser(initValues);
                navigate("/");
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
            <div className="container">
                <div className="card-content login-content">
                    <CardHeader title="Log in to Your Account" />
                    <LoginForm values={user} error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
                    <CardBottom dir="/register" title="Don't have an account? Sign Up" />
                </div>
            </div>
        </>
    );
};

export default Login;
