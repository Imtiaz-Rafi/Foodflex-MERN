import React, { useState, useEffect } from "react";
// import PreLoader from "../Inc/PreLoader";
// import BreadCrumb from "./controllers/Breadcrumb";
import SectionHeading from "./controllers/SectionHeading";
import HeadingTabs from "./controllers/HeadingTabs";
import DinnerView from "./views/DinnerView";
import SnacksView from "./views/SnacksView";
import LunchView from "./views/LunchView";

const Menu = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        let res = await fetch("/menu");
        res = await res.json();
        console.log("fetch data: ", res);
        setItems(res);
    };

    useEffect(() => {
        try {
            fetchItems();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <section id="menu" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <SectionHeading />
                        <div className="col-md-12 col-sm-12">
                            <div className="row" id="tabs">
                                <HeadingTabs />
                                <div className="col-md-12">
                                    <section className="tabs-content">
                                        <LunchView items={items} />
                                        {/* <SnacksView /> */}
                                        {/* <DinnerView /> */}
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;
