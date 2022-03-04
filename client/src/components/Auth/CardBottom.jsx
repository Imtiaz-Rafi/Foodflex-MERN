import React from "react";
import {Link} from "react-router-dom";

const Card_header = (props) =>(
    <div className="card-bottom">
        <div className="round-card">
            <Link to={props.dir}>{props.title}</Link>
        </div>
    </div>
);

export default Card_header;