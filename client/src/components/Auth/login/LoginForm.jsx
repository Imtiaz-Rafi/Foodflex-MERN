import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextInput from "../TextInput";

const LoginForm = ({ values, error, handleChange, handleSubmit }) => (
    <div className="card-body">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <TextInput
                    icon="fas fa-envelope"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={values.email}
                    error={error.email}
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <TextInput
                    icon="fas fa-lock"
                    type="password"
                    placeholder="Password"
                    name="pass"
                    value={values.pass}
                    error={error.pass}
                    onChange={handleChange}
                />
            </div>

            <div className="row">
                <div className="login-btn d-table d-table-cell">
                    <Link className="forgot-pass d-table-cell" to="forgotpass">
                        Forgot Password?
                    </Link>
                    <button type="submit" className="sign-up-button log-in-button d-table-cell">
                        Log In
                    </button>
                </div>
            </div>
        </form>
    </div>
);

LoginForm.propTypes = {
    values: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
