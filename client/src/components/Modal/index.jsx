import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalTEST extends React.Component {
    state = {
        isModalOpen: false,
    };

    toggleForm = () => {
        console.log("Clicked");
        this.setState({ isModalOpen: !this.state.isModalOpen });
    };
    render() {
        return (
            <section>
                <Button color="danger" onClick={this.toggleForm}>
                    Click Me
                </Button>
                <Modal isOpen={this.state.isModalOpen} centered fullscreen="" size="" toggle={this.toggleForm}>
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="primary" onClick={this.toggleForm}>
                            Do Something
                        </Button>{" "}
                        <Button onClick={this.toggleForm}>Cancel</Button>
                    </ModalFooter> */}
                </Modal>
            </section>
        );
    }
}

export default ModalTEST;
