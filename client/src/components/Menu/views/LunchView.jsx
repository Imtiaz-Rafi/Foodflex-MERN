import React from "react";
import PropTypes from "prop-types";

const LunchView = ({ items }) => {
    let ind = 0;
    const toogleIndex = () => {
        if (ind) ind = 0;
        else ind = 1;
    };
    return (
        <article id="tabs-1">
            <div className="row">
                {items?.map((item) =>
                    ind === 0 ? (
                        <div className="col-md-6" key={item._id}>
                            <div className="row">
                                <div className="left-list">
                                    <div className="col-md-12">
                                        <div className="tab-item">
                                            <img src={"assets/images/" + item.image} alt="" />
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                            <div className="price">
                                                <h6>৳{item.price}</h6>
                                                {toogleIndex()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-md-6" key={item._id}>
                            <div className="row">
                                <div className="right-list">
                                    <div className="col-md-12">
                                        <div className="tab-item">
                                            <img src={"assets/images/" + item.image} alt="" />
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                            <div className="price">
                                                <h6>৳{item.price}</h6>
                                                {toogleIndex()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </article>
    );
};

LunchView.propTypes = {
    items: PropTypes.array.isRequired,
};

export default LunchView;
