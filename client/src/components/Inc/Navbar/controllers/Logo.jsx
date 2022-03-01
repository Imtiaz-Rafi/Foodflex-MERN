import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
            </button>
            {/* lOGO TEXT HERE */}
            <Link to="/" className="navbar-brand">
                FoodFlex
            </Link>
        </div>
    );
};

export default Logo;
