import React from "react";

const Card_header = (props) =>(
    <div className="card-header">
        {/* <a to="/"><i className="fas fa-arrow-circle-left"></i></a> */}
        {/* <i className="fas fa-user-circle fa-3x"></i> */}
        <h3>{props.title}</h3>
    </div>
);

export default Card_header;