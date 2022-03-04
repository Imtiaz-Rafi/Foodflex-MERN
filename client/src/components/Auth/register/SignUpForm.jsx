import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import CheckBox from "../CheckBox";

const SignUpForm = ({ values, handleSubmit, handleChange, handleCheckBox, agreement, error }) => (
    <div className="card-body">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <TextInput
                    icon="fas fa-user"
                    type="name"
                    placeholder="First Name"
                    name="fname"
                    value={values.fname}
                    error={error.fname}
                    onChange={handleChange}
                />
                <TextInput
                    icon="fas fa-user"
                    type="name"
                    placeholder="Last Name"
                    name="sname"
                    value={values.sname}
                    error={error.sname}
                    onChange={handleChange}
                />
            </div>
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
                <TextInput
                    icon="fas fa-phone-alt"
                    type="phone"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={values.mobile}
                    error={error.mobile}
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
                <TextInput
                    icon="fas fa-lock"
                    type="password"
                    placeholder="Confirm Password"
                    name="conpass"
                    value={values.conpass}
                    error={error.conpass}
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <div className="login-btn d-table d-table-cell">
                    <CheckBox type="checkbox" name="agree" id="agree" checked={agreement} onChange={handleCheckBox} />
                    <button type="submit" className="sign-up-button log-in-button d-table-cell" disabled={!agreement}>
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    </div>
);

SignUpForm.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCheckBox: PropTypes.func.isRequired,
    agreement: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
};

export default SignUpForm;
