import React from "react";
import Slider from "./sections/Slider";
import Offers from "./sections/Offers";
import About from "./sections/About";
import MenuView from "./sections/MenuView";
// import Contact from "../Contact";
import Reservation from "../Reservation";
// import Team from "./team";
// import Testimonial from "./testimonial";

const Home = () => {
    return (
        <>
            <Slider />
            <Offers />
            <About />
            <MenuView />
            {/* <Contact /> */}
            <Reservation />
        </>
    );
};

export default Home;
