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
import Auth from "./Auth";
// import ModalTest from "./ModalTest";

class App extends React.Component {
    state = {
        isLoginModalOpen: false,
        isSignUpModalOpen: false,
    };

    toggleSignUpForm = () => {
        this.setState({ isSignUpModalOpen: !this.state.isSignUpModalOpen, isLoginModalOpen: false });
    };
    toggleLoginForm = () => {
        this.setState({ isLoginModalOpen: !this.state.isLoginModalOpen, isSignUpModalOpen: false });
    };

    render() {
        return (
            <>
                <PreLoader />
                <Routes>
                    <Route path="/" element={<Header toggleLoginForm={this.toggleLoginForm} />} />
                    <Route path="*" element={<Navbar toggleLoginForm={this.toggleLoginForm} />} />
                </Routes>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservation" element={<Reservation />} />

                    <Route path="*" element={<Error />} />
                </Routes>
                <Auth
                    toggleLoginForm={this.toggleLoginForm}
                    toggleSignUpForm={this.toggleSignUpForm}
                    isLoginModalOpen={this.state.isLoginModalOpen}
                    isSignUpModalOpen={this.state.isSignUpModalOpen}
                />

                <Footer />
            </>
        );
    }
}

export default App;
