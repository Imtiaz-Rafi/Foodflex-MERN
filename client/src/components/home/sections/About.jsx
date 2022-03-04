import React from "react";

const About = () => {
    return (
        <section id="about" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="about-info">
                            <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                                <h4>Read our story</h4>
                                <h2>We've been Making The Delicious Foods Since 2021</h2>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay="0.4s">
                                <p>
                                    FoodFlex, An online food ordering system is a system that will allow you order our
                                    food from the menu section or reserve a table for you and your friends &amp; family.
                                    <br /> <br />
                                    Without logging in, users can browse our cuisine menu. Where users may search for
                                    and order their favorite foods in the quantities they require. Our goal is to
                                    deliver food to the locations you specify so that you can enjoy our cuisine with
                                    your friends and family wherever they are.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="wow fadeInUp about-image" data-wow-delay="0.6s">
                            <img src="assets/images/about-image.jpg" className="img-responsive" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
