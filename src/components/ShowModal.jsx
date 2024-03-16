/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Modal from "./Modal";
import AddNotes from "../pages/AddNotes";
import MainPage from "../pages/MainPage";

export default function ShowModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div style={{}}>
            <MainPage/>
            {/* <button onClick={toggleModal}>Open Modal</button> */}
            <Modal isOpen={isModalOpen}>
                <AddNotes/>
            </Modal>
        </div>
    );
}
