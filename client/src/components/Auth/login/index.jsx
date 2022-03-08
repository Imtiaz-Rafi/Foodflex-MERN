import React, { useState } from "react";
// import "../../css/login.css";
import LoginForm from "./LoginForm";
import CardHeader from "../CardHeader";
import CardBottom from "../CardBottom";
import { useNavigate, Link } from "react-router-dom";

import { Form, FormGroup, Input, Label, Button, Row, Col, FormFeedback } from "reactstrap";

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
            {/* <div className="container">
                <div className="card-content login-content">
                    <CardHeader title="Log in to Your Account" />
                    <LoginForm values={user} error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
                    <CardBottom dir="/register" title="Don't have an account? Sign Up" />
                </div>
            </div> */}
            <Form>
                <FormGroup row>
                    <Label for="email" sm={1}>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </Label>
                    <Col sm={11}>
                        <Input id="email" name="email" placeholder="yourmail@abc.com" type="email" />
                    </Col>
                    {/* <FormFeedback tooltip valid>
                        Sweet! that name is available
                    </FormFeedback>
                    <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback> */}
                </FormGroup>
                <FormGroup row className="position-relative">
                    <Label for="password" sm={1}>
                        <i class="fa fa-lock"></i>
                    </Label>
                    <Col sm={11}>
                        <Input id="password" name="password" placeholder="Password" type="password" />
                    </Col>
                    {/* <FormFeedback tooltip valid>
                        Sweet! that name is available
                    </FormFeedback>
                    <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback> */}
                </FormGroup>
                <FormGroup row>
                    <Col
                        sm={{
                            size: 10,
                        }}
                    >
                        <FormGroup check>
                            <Input id="checkbox2" type="checkbox" /> <Label check>Remember Password</Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <Button block color="success">
                    Sign In
                </Button>
            </Form>
            <Link to="#">Forgot Password?</Link>
            <CardBottom dir="/register" title="Don't have an account? Sign Up" />
        </>
    );
};

export default Login;
