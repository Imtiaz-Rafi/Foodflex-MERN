import React from "react";

const Team = () => {
    return (
        <section id="team" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                            <h2>Meet our chefs</h2>
                            <h4>They are nice &amp; friendly</h4>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                            <img src="images/team-image1.jpg" className="img-responsive" alt="" />
                            <div className="team-hover">
                                <div className="team-item">
                                    <h4>Duis vel lacus id magna mattis vehicula</h4>
                                    <ul className="social-icon">
                                        <li>
                                            <a href="#" className="fa fa-linkedin-square" />
                                        </li>
                                        <li>
                                            <a href="#" className="fa fa-envelope-o" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3>New Catherine</h3>
                            <p>Kitchen Officer</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                            <img src="images/team-image2.jpg" className="img-responsive" alt="" />
                            <div className="team-hover">
                                <div className="team-item">
                                    <h4>Cras suscipit neque quis odio feugiat</h4>
                                    <ul className="social-icon">
                                        <li>
                                            <a href="#" className="fa fa-instagram" />
                                        </li>
                                        <li>
                                            <a href="#" className="fa fa-flickr" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3>Lindsay Perlen</h3>
                            <p>Owner &amp; Manager</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                            <img src="images/team-image3.jpg" className="img-responsive" alt="" />
                            <div className="team-hover">
                                <div className="team-item">
                                    <h4>Etiam auctor enim tristique faucibus</h4>
                                    <ul className="social-icon">
                                        <li>
                                            <a href="#" className="fa fa-github" />
                                        </li>
                                        <li>
                                            <a href="#" className="fa fa-google" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3>Isabella Grace</h3>
                            <p>Pizza Specialist</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
