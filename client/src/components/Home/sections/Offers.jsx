import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
    return (
        <section id="offers" data-stellar-background-ratio="0.5">
            <div class="container">
                <div class="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                            <h2>Today's Offers</h2>
                            <h4>Grab them ASAP. Time is flying</h4>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-4">
                        {/* MENU THUMB */}
                        <div className="offers-thumb">
                            <Link to="/menu" className="image-popup" title="American Breakfast">
                                <img src="assets/images/menu-image1.jpg" className="img-responsive" alt="" />
                                <div className="offers-info">
                                    <div className="offers-item">
                                        <h3>American Breakfast</h3>
                                        <p>Tomato / Eggs / Sausage</p>
                                    </div>
                                    <div className="d-inline-grid">
                                        <div className="offers-price">
                                            <span>20% off</span>
                                        </div>
                                        <div className="offers-cart-plus">
                                            <Link to="cart" class="fa fa-cart-plus" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-4">
                        {/* MENU THUMB */}
                        <div className="offers-thumb">
                            <Link to="/menu" className="image-popup" title="Deli Burger">
                                <img src="assets/images/menu-image5.jpg" className="img-responsive" alt="" />
                                <div className="offers-info">
                                    <div className="offers-item">
                                        <h3>Deli Burger</h3>
                                        <p>Beef / Fried Potatoes</p>
                                    </div>
                                    <div className="d-inline-grid">
                                        <div className="offers-price">
                                            <span>15% off</span>
                                        </div>
                                        <div className="offers-cart-plus">
                                            <Link to="/menu" class="fa fa-cart-plus" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;
