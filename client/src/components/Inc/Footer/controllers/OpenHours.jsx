import React from "react";

const OpenHours = () => {
    return (
        <div className="col-md-4 col-sm-8">
            <div className="footer-info footer-open-hour">
                <div className="section-title">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                        Open Hours
                    </h2>
                </div>
                <div className="wow fadeInUp" data-wow-delay="0.4s">
                    <p>Saturday: Closed</p>
                    <div>
                        <strong>Sunday to Thursday</strong>
                        <p>7:00 AM - 9:00 PM</p>
                    </div>
                    <div>
                        <strong>Friday</strong>
                        <p>11:00 AM - 11:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenHours;
