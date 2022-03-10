import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
const TextInput = ({ name, type, label, placeholder, value, error, onChange }) => (
    <FormGroup>
        <Label for={name}>{label}</Label>
        <Input
            id={name}
            name={name}
            placeholder={placeholder}
            type={type}
            className={error ? "form-control invalidBox" : ""}
            value={value}
            onChange={onChange}
            invalid={error}
            // valid={!error}
        />
        <FormFeedback>{error}</FormFeedback>
    </FormGroup>
);

TextInput.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

// TextInput.defaultProps = {
//     size: 26,
//     className: "form-control",
// };

export default TextInput;
