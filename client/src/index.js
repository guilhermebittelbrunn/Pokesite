import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Nav from './components/NavBar';
import Footer from './components/Footer';
import Container from './components/Container';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal.js';
import axios from 'axios';

function Application() {
    const [load, setLoad] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [id, setId] = useState('');

    async function showModal(id) {
        setId(id);
        setModalState(!modalState);
    }

    async function changeId(method) {
        setId((preventValue) => {
            return preventValue + method;
        });
    }

    return (
        <>
            <Nav />
            {modalState && <Modal showModal={showModal} id={id} changeId={changeId} />}
            <main>
                <SearchBar />
                <Container load={load} setLoad={setLoad} showModal={showModal} />
            </main>
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Application />);
