import React from "react";
import { Link } from "react-router-dom";

const Reservation = () => {
    return (
        <div className="col-md-3 col-sm-8">
            <div className="footer-info">
                <div className="section-title">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                        Reservation
                    </h2>
                </div>
                <address className="wow fadeInUp" data-wow-delay="0.4s">
                    <p>
                        <i className="fa fa-phone" /> 090-080-0650 | 090-070-0430
                    </p>
                    <p>
                        <Link to="mailto:foodflex@company.com">foodflex@company.com</Link>
                    </p>
                    <p>LINE: foodflex247</p>
                </address>
            </div>
        </div>
    );
};

export default Reservation;
