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
                                <h2>We've been Making The Delicious Foods Since 1999</h2>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay="0.4s">
                                <p>
                                    Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin
                                    scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus,
                                    rhoncus venenatis leo malesuada id.
                                </p>
                                <p>
                                    Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu nibh ac,
                                    posuere tristique magna. You can use this template for your cafe or restaurant
                                    website. Please tell your friends about{" "}
                                    <a href="https://plus.google.com/+templatemo" target="_parent">
                                        templatemo
                                    </a>
                                    . Thank you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="wow fadeInUp about-image" data-wow-delay="0.6s">
                            <img src="images/about-image.jpg" className="img-responsive" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
