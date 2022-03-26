import React from "react";
import PreLoader from "../Inc/PreLoader";
import Slider from "./sections/Slider";
import Offers from "./sections/Offers";
import About from "./sections/About";
import MenuView from "./sections/MenuView";
import Menu from "../Menu";
// import Contact from "../Contact";
import Reservation from "../Reservation";
// import Team from "./team";
// import Testimonial from "./testimonial";

const Home = () => {
    return (
        <>
            {/* <PreLoader /> */}
            <Slider />
            <Offers />
            <About />
            {/* <MenuView /> */}
            <Menu />
            {/* <Contact /> */}
            <Reservation />
        </>
    );
};

export default Home;
