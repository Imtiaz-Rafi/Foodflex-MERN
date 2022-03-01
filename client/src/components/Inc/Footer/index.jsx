import React from "react";
import FindUs from "./controllers/FindUs";
import Reservation from "./controllers/Reservation";
import OpenHours from "./controllers/OpenHours";
import SocialInfo from "./controllers/SocialInfo";

const Footer = () => {
    return (
        <footer id="footer" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <FindUs />
                    <Reservation />
                    <OpenHours />
                    <SocialInfo />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
