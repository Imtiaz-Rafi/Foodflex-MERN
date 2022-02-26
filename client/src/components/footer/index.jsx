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
                                    123 nulla a cursus rhoncus,
                                    <br />
                                    augue sem viverra 10870
                                    <br />
                                    id ultricies sapien
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
                                    <a href="mailto:info@company.com">info@company.com</a>
                                </p>
                                <p>LINE: eatery247</p>
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
                                <p>Monday: Closed</p>
                                <div>
                                    <strong>Tuesday to Friday</strong>
                                    <p>7:00 AM - 9:00 PM</p>
                                </div>
                                <div>
                                    <strong>Saturday - Sunday</strong>
                                    <p>11:00 AM - 10:00 PM</p>
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
                                Copyright © 2018 <br />
                                Your Company Name
                                <br />
                                <br />
                                Design:
                                <a rel="nofollow" href="http://templatemo.com" target="_parent">
                                    TemplateMo
                                </a>
                                <br />
                                <br />
                                Distribution:
                                <a href="http://themewagon.com" target="_parent">
                                    ThemeWagon
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
