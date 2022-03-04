import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CheckBox = ({ type, name, checked, onChange }) => (
    <label className="bottom-card-body d-table-cell" >
        <input type={type} name={name} id={name} checked={checked} onChange={onChange} />
        {" I accept the "}
        <Link to="#">Terms and conditions</Link>
        {" & "}
        <Link to="#">Privacy Policy</Link>
    </label>
);

CheckBox.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default CheckBox;
