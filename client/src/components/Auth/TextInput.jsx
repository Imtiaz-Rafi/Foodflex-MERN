import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ icon, type, className, placeholder, name, value, error, onChange }) => (
    <div className="col">
        <i className={icon}></i>
        <input
            type={type}
            className={error ? "form-control invalidBox" : className}
            placeholder={placeholder}
            name={name}
            // size={size}
            value={value}
            onChange={onChange}
            // required
        />
        {error && <div className="Invalid-feedback">{error}</div>}
    </div>
);

TextInput.propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // size: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
    size: 26,
    className: "form-control",
};

export default TextInput;
