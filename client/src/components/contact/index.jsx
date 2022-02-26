import React from "react";

const Contact = () => {
    return (
        <section id="contact" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    {/* How to change your own map point
            1. Go to Google Maps
            2. Click on your location point
            3. Click "Share" and choose "Embed map" tab
            4. Copy only URL and paste it within the src="" field below
	*/}
                    <div className="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
                        <div id="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                        {/* CONTACT FORM */}
                        <form
                            action="#"
                            method="post"
                            className="wow fadeInUp"
                            id="contact-form"
                            role="form"
                            data-wow-delay="0.8s"
                        >
                            {/* IF MAIL SENT SUCCESSFUL  // connect this with custom JS */}
                            <h6 className="text-success">Your message has been sent successfully.</h6>
                            {/* IF MAIL NOT SENT */}
                            <h6 className="text-danger">
                                E-mail must be valid and message must be longer than 1 character.
                            </h6>
                            <div className="col-md-6 col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cf-name"
                                    name="name"
                                    placeholder="Full name"
                                />
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="cf-email"
                                    name="email"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cf-subject"
                                    name="subject"
                                    placeholder="Subject"
                                />
                                <textarea
                                    className="form-control"
                                    rows={6}
                                    id="cf-message"
                                    name="message"
                                    placeholder="Tell about your project"
                                    defaultValue={""}
                                />
                                <button type="submit" className="form-control" id="cf-submit" name="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
