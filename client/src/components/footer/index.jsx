import React from "react";

const Footer = () => {
    return (
        <footer id="footer" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-8">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Find us
                                </h2>
                            </div>
                            <address className="wow fadeInUp" data-wow-delay="0.4s">
                                <p>
                                    New Market,
                                    <br />
                                    Chittagong, Bangladesh
                                </p>
                            </address>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-8">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Reservation
                                </h2>
                            </div>
                            <address className="wow fadeInUp" data-wow-delay="0.4s">
                                <p>090-080-0650 | 090-070-0430</p>
                                <p>
                                    <a href="mailto:foodflex@company.com">foodflex@company.com</a>
                                </p>
                                <p>LINE: foodflex247</p>
                            </address>
                        </div>
                    </div>
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
                    <div className="col-md-2 col-sm-4">
                        <ul className="wow fadeInUp social-icon" data-wow-delay="0.4s">
                            <li>
                                <a href="#" className="fa fa-facebook-square" attr="facebook icon" />
                            </li>
                            <li>
                                <a href="#" className="fa fa-twitter" />
                            </li>
                            <li>
                                <a href="#" className="fa fa-instagram" />
                            </li>
                            <li>
                                <a href="#" className="fa fa-google" />
                            </li>
                        </ul>
                        <div className="wow fadeInUp copyright-text" data-wow-delay="0.8s">
                            <p>
                                <br />
                                Copyright © 2022 <br />
                                FoodFlex
                                <br />
                                <br />
                                Developer:
                                <a href="https://github.com/Imtiaz-Rafi/Foodflex-MERN"> Imtiaz-Rafi</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
