import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const SocialLinks = (props) => {
    return (
        <div className="api-Links">
            <Button>Facebook</Button>
            <Button>Google</Button>
        </div>
    );
};

SocialLinks.propTypes = {};

export default SocialLinks;
