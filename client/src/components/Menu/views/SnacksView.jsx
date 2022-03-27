import React from "react";
import PropTypes from "prop-types";

const SnacksView = (props) => {
    return (
        <article id="tabs-2">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="left-list">
                            <div className="col-md-12">
                                <div className="tab-item">
                                    <img src="assets/images/tab-item-04.png" alt="" />
                                    <h4>Eggs Omelette</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p>
                                    <div className="price">
                                        <h6>$14</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="tab-item">
                                    <img src="assets/images/tab-item-05.png" alt="" />
                                    <h4>Dollma Pire</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p>
                                    <div className="price">
                                        <h6>$18</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="tab-item">
                                    <img src="assets/images/tab-item-06.png" alt="" />
                                    <h4>Omelette &amp; Cheese</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p>
                                    <div className="price">
                                        <h6>$22</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="right-list">
                            <div className="col-md-12">
                                <div className="tab-item">
                                    <img src="assets/images/tab-item-01.png" alt="" />
                                    <h4>Fresh Chicken Salad</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p>
                                    <div className="price">
                                        <h6>$10</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="tab-item">
                                    <img src="assets/images/tab-item-02.png" alt="" />
                                    <h4>Orange Juice</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p>
                                    <div className="price">
                                        <h6>$20</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="tab-item">
                                    <img src="assets/images/tab-item-03.png" alt="" />
                                    <h4>Fruit Salad</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p>
                                    <div className="price">
                                        <h6>$30</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

SnacksView.propTypes = {};

export default SnacksView;
