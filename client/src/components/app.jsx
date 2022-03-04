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
// import Login from "./Auth/login";

// import { Modal, ModalBody, ModalHeader } from "reactstrap";

class App extends React.Component {
    // state = {
    //     isModalOpen: false,
    // };

    // toggleForm = () => {
    //     console.log("Clicked");
    //     this.setState({ isModalOpen: !this.state.isModalOpen });
    // };

    render() {
        return (
            <>
                <PreLoader />
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="*" element={<Navbar toggleForm={this.toggleForm} />} />
                </Routes>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    <Route path="/reservation" element={<Reservation />} />

                    <Route path="*" element={<Error />} />
                </Routes>

                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleForm}>
                    <ModalHeader>Create New ToDo Task</ModalHeader>
                    <ModalBody>
                        <Login />
                    </ModalBody>
                </Modal> */}
                <Footer />
            </>
        );
    }
}

export default App;
