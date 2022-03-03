import React from "react";

const Reservation = () => {
    return (
        // className="section"
        <section id="reservation" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="left-text-content">
                            <div className="section-heading wow fadeInUp" data-wow-delay="0.1s">
                                <h6>Contact Us</h6>
                                <h2>Here You Can Make A Reservation Or Just walkin to our cafe</h2>
                            </div>
                            <p className="wow fadeInUp" data-wow-delay="0.3s">
                                Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei
                                sollicitudin urna diam, sed commodo purus porta ut.
                            </p>
                            <div className="row">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="phone">
                                        <i className="fa fa-phone" />
                                        <h4>Phone Numbers</h4>
                                        <span>
                                            <a href="#">090-080-0650</a>
                                            <br />
                                            <a href="#">090-070-0430</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="message">
                                        <i className="fa fa-envelope" />
                                        <h4>Emails</h4>
                                        <span>
                                            <a href="#">foodflex@company.com</a>
                                            <br />
                                            <a href="#">info@foodflex.com</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.55s">
                        <div className="contact-form">
                            <form id="contact" action method="post">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4>Table Reservation</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <fieldset>
                                            <input
                                                name="name"
                                                type="text"
                                                id="name"
                                                placeholder="Your Name*"
                                                required
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <fieldset>
                                            <input
                                                name="email"
                                                type="text"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                placeholder="Your Email Address"
                                                required
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <fieldset>
                                            <input
                                                name="phone"
                                                type="text"
                                                id="phone"
                                                placeholder="Phone Number*"
                                                required
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <fieldset>
                                            <select value="number-guests" name="number-guests" id="number-guests">
                                                <option value="number-guests">Number Of Guests</option>
                                                <option name={1} id={1}>
                                                    1
                                                </option>
                                                <option name={2} id={2}>
                                                    2
                                                </option>
                                                <option name={3} id={3}>
                                                    3
                                                </option>
                                                <option name={4} id={4}>
                                                    4
                                                </option>
                                                <option name={5} id={5}>
                                                    5
                                                </option>
                                                <option name={6} id={6}>
                                                    6
                                                </option>
                                                <option name={7} id={7}>
                                                    7
                                                </option>
                                                <option name={8} id={8}>
                                                    8
                                                </option>
                                                <option name={9} id={9}>
                                                    9
                                                </option>
                                                <option name={10} id={10}>
                                                    10
                                                </option>
                                                <option name={11} id={11}>
                                                    11
                                                </option>
                                                <option name={12} id={12}>
                                                    12
                                                </option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            name="date"
                                            id="date"
                                            type="text"
                                            className="form-control"
                                            placeholder="dd/mm/yyyy"
                                        />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <fieldset>
                                            <select value="time" name="time" id="time">
                                                <option value="time">Time</option>
                                                <option name="Breakfast" id="Breakfast">
                                                    Breakfast
                                                </option>
                                                <option name="Lunch" id="Lunch">
                                                    Lunch
                                                </option>
                                                <option name="Dinner" id="Dinner">
                                                    Dinner
                                                </option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea
                                                name="message"
                                                rows={6}
                                                id="message"
                                                placeholder="Message"
                                                required
                                                defaultValue={""}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-button-icon">
                                                Make A Reservation
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
