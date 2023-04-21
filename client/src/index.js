import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import SearchBar from "./components/SearchBar";
import Modal from "./components/Modal.js";

function Application() {
    const [load, setLoad] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [id, setId] = useState("");

    function showModal(id) {
        setId(id);
        setModalState(!modalState);
    }

    return (
        <>
            <Nav />
            {modalState && <Modal showModal={showModal} id={id} />}
            <main>
                <SearchBar />
                <Container load={load} setLoad={setLoad} showModal={showModal} />
            </main>
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);
