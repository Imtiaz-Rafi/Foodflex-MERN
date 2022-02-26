import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Team from "./team";
import Menu from "./menu";
import Testimonial from "./testimonial";
import Contact from "./contact";
import Footer from "./footer";
// import "./css/templatemo-style.css";

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <Home />
                <About />
                <Team />
                <Menu />
                <Testimonial />
                <Contact />
                <Footer />
            </>
        );
    }
}

export default App;
