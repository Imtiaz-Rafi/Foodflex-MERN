import React from "react";
import { Routes, Route } from "react-router-dom";
// ~~~~~~~INC~~~~~~~~~
import Navbar from "./Inc/Navbar/Navbar";
import Header from "./Inc/Navbar/Header";
import Footer from "./Inc/Footer";
import Error from "./Error/Error";
import PreLoader from "./Inc/PreLoader";
// ~~~~~~~ LINKS ~~~~~~~
import Home from "./Home";
import Menu from "./Menu";
// import Contact from "./Contact";
import Reservation from "./Reservation";

class App extends React.Component {
    render() {
        return (
            <>
                <PreLoader />
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="*" element={<Navbar />} />
                </Routes>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    <Route path="/reservation" element={<Reservation />} />

                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

export default App;
