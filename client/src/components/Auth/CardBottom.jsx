import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const CardBottom = ({ toggleForm, title }) => (
    <div className="bottom-LoginForm" color="light">
        <Button onClick={toggleForm}>{title}</Button>
    </div>
);

CardBottom.propTypes = {
    title: PropTypes.string.isRequired,
    toggleForm: PropTypes.func.isRequired,
};

export default CardBottom;
