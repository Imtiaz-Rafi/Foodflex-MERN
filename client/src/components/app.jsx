import React from "react";
import { Routes, Route } from "react-router-dom";
// ~~~~~~~INC~~~~~~~~~
import Navbar from "./Inc/Navbar";
import Footer from "./Inc/Footer";
import Error from "./Error/Error";
import PreLoader from "./Inc/PreLoader";
// ~~~~~~~ LINKS ~~~~~~~
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";

class App extends React.Component {
    render() {
        return (
            <>
                <PreLoader />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/" element={<Home />} /> */}

                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

export default App;
