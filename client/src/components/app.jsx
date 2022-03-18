import React, { useState, useEffect } from "react";
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

const App = () => {
    const [LoggedIn, setLoggedIn] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const isLoggedIn = async () => {
        try {
            const res = await fetch("/isLogged", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await res.json();
            console.log("User Data", data);
            if (res.status === 200) {
                setLoggedIn(true);
            } else {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log("Error from navcard", err);
            setLoggedIn(false);
        }
    };
    const toggleSignUpForm = () => {
        setIsSignUpModalOpen(!isSignUpModalOpen);
        setIsLoginModalOpen(false);
    };
    const toggleLoginForm = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
        setIsSignUpModalOpen(false);
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <>
            <PreLoader />
            <Routes>
                <Route path="/" element={<Header toggleLoginForm={toggleLoginForm} LoggedIn={LoggedIn} />} />
                <Route path="*" element={<Navbar toggleLoginForm={toggleLoginForm} LoggedIn={LoggedIn} />} />
            </Routes>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />

                <Route path="*" element={<Error />} />
            </Routes>
            <Auth
                isLoggedIn={isLoggedIn}
                toggleLoginForm={toggleLoginForm}
                toggleSignUpForm={toggleSignUpForm}
                isLoginModalOpen={isLoginModalOpen}
                isSignUpModalOpen={isSignUpModalOpen}
            />

            <Footer />
        </>
    );
};

export default App;
