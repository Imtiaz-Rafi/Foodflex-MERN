import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
    return (
        // <!-- offer section -->

        <section id="offer" data-stellar-background-ratio="0.5">
            {/* <div class="offer_container"> */}
            <div class="container">
                <div class="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                            <h2>Today's Offers</h2>
                            {/* <h4>They are nice &amp; friendly</h4> */}
                            <h4>Grab them ASAP. Time is flying</h4>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-6 col-sm-4">
                            {/* MENU THUMB */}
                            <div className="offer-thumb">
                                <Link to="/menu" className="image-popup" title="American Breakfast">
                                    <img src="images/menu-image1.jpg" className="img-responsive" alt="" />
                                    <div className="offer-info">
                                        <div className="offer-item">
                                            <h3>American Breakfast</h3>
                                            <p>Tomato / Eggs / Sausage</p>
                                        </div>
                                        <div className="d-inline-grid">
                                            <div className="offer-price">
                                                <span>20% off</span>
                                            </div>
                                            <div className="offer-cart-plus">
                                                <Link to="cart" class="fa fa-cart-plus" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-4">
                            {/* MENU THUMB */}
                            <div className="offer-thumb">
                                <Link to="/menu" className="image-popup" title="Deli Burger">
                                    <img src="images/menu-image5.jpg" className="img-responsive" alt="" />
                                    <div className="offer-info">
                                        <div className="offer-item">
                                            <h3>Deli Burger</h3>
                                            <p>Beef / Fried Potatoes</p>
                                        </div>
                                        <div className="d-inline-grid">
                                            <div className="offer-price">
                                                <span>15% off</span>
                                            </div>
                                            <div className="offer-cart-plus">
                                                <Link to="/menu" class="fa fa-cart-plus" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-4 col-sm-6"> */}
                    {/* MENU THUMB */}
                    {/* <div className="menu-thumb">
                            <a href="images/menu-image1.jpg" className="image-popup" title="American Breakfast">
                                <img src="images/menu-image1.jpg" className="img-responsive" alt="" />
                                <div className="menu-info">
                                    <div className="menu-item">
                                        <h3>American Breakfast</h3>
                                        <p>Tomato / Eggs / Sausage</p>
                                    </div>
                                    <div className="menu-price">
                                        <span>$25</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div> */}
                    {/* <div class="col-md-6">
                            <div class="box">
                                <div class="img-box">
                                    <img src="images/o1.jpg" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>Tasty Thursdays</h5>
                                    <h6>
                                        <span>20%</span> Off
                                    </h6>
                                    <a href="">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="box">
                                <div class="img-box">
                                    <img src="images/o2.jpg" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>Pizza Days</h5>
                                    <h6>
                                        <span>15%</span> Off
                                    </h6>
                                    <a href="">Order Now</a>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
            {/* </div> */}
        </section>

        // <!-- end offer section -->
    );
};

export default Offers;
