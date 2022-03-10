import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";

const LoginForm = ({ values, error, handleChange, handleSubmit, handleCheckBox, remember }) => (
    <Form onSubmit={handleSubmit}>
        <TextInput
            name="email"
            type="email"
            label="Email"
            placeholder="yourmail@abc.com"
            value={values.email}
            error={error.email}
            onChange={handleChange}
        />
        <TextInput
            name="pass"
            type="password"
            label="Password"
            placeholder="Enter Your password"
            value={values.pass}
            error={error.pass}
            onChange={handleChange}
        />

        <FormGroup row>
            <Col sm={{ size: 10 }}>
                <FormGroup check>
                    <Input id="checkbox2" type="checkbox" checked={remember} onChange={handleCheckBox} />{" "}
                    <Label check>Remember Password</Label>
                </FormGroup>
            </Col>
        </FormGroup>
        <Button block className="Loginbtn">
            Sign In
        </Button>
    </Form>
);

LoginForm.propTypes = {
    values: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    remember: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCheckBox: PropTypes.func.isRequired,
};

export default LoginForm;
