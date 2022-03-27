import React from "react";
import PropTypes from "prop-types";

const HeadingTabs = (props) => {
    return (
        <div className="col-md-12">
            <div className="heading-tabs">
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            <li>
                                <a href="#tabs-2">
                                    <img src="assets/images/tab-icon-02.png" alt="" />
                                    Lunch
                                </a>
                            </li>
                            <li>
                                <a href="#tabs-1">
                                    <img src="assets/images/tab-icon-01.png" alt="" />
                                    Snacks &amp; Drinks
                                </a>
                            </li>
                            <li>
                                <a href="#tabs-3">
                                    <img src="assets/images/tab-icon-03.png" alt="" />
                                    Dinner
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeadingTabs.propTypes = {};

export default HeadingTabs;
