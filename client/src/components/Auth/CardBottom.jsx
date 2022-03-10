import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Card_header = (props) => (
    <div className="bottom-LoginForm" color="light">
        <Button>{props.title}</Button>
    </div>
);

export default Card_header;
