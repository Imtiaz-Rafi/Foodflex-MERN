import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";

const SignUpForm = ({ values, handleSubmit, handleChange, handleCheckBox, agreement, error }) => (
    <Form onSubmit={handleSubmit}>
        <Row xs={2}>
            <Col>
                <TextInput
                    name="fname"
                    type="name"
                    label="First Name"
                    placeholder="Enter Your Name"
                    value={values.fname}
                    error={error.fname}
                    onChange={handleChange}
                />
            </Col>
            <Col>
                <TextInput
                    name="sname"
                    type="name"
                    label="Last Name"
                    placeholder="Enter Your Name"
                    value={values.sname}
                    error={error.sname}
                    onChange={handleChange}
                />
            </Col>
            <Col>
                <TextInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="yourmail@abc.com"
                    value={values.email}
                    error={error.email}
                    onChange={handleChange}
                />
            </Col>
            <Col>
                <TextInput
                    name="mobile"
                    type="phone"
                    label="Mobile No."
                    placeholder="+880**********"
                    value={values.mobile}
                    error={error.mobile}
                    onChange={handleChange}
                />
            </Col>
            <Col>
                <TextInput
                    name="pass"
                    type="password"
                    label="Password"
                    placeholder="Enter Password"
                    value={values.pass}
                    error={error.pass}
                    onChange={handleChange}
                />
            </Col>
            <Col>
                <TextInput
                    name="conpass"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    value={values.conpass}
                    error={error.conpass}
                    onChange={handleChange}
                />
            </Col>
        </Row>

        <FormGroup row>
            <Col sm={{ size: 10 }}>
                <FormGroup check>
                    <Input id="checkbox2" type="checkbox" name="agree" checked={agreement} onChange={handleCheckBox} />{" "}
                    <Label check>
                        {" I accept the "}
                        <Link to="#">Terms and conditions</Link>
                        {" & "}
                        <Link to="#">Privacy Policy</Link>
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>
        <Button block className="Loginbtn" disabled={!agreement}>
            Sign Up
        </Button>
    </Form>
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
