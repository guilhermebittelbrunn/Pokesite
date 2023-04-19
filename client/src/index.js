import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import Container from './components/Container';
import SearchBar from './components/SearchBar';
import axios from 'axios';

function Application() {
    const [pokemons, setPokemons] = useState([]);
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(50);

    async function showMorePokemons() {
        await fetchPokemons(start, end, 1);
        incressLoop();
    }

    async function fetchPokemons(start, end, skip) {
        let data = [];
        for (let i = start; i <= end; i += skip) {
            const apiresolve = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const apijson = await apiresolve.data;
            data.push(apijson);
        }
        setPokemons((preventValue) => {
            return [...preventValue, ...data];
        });
    }

    function incressLoop() {
        setStart(start + 25);
        setEnd(end + 25);
    }

    useEffect(() => {
        (async () => {
            try {
                await fetchPokemons(start, end, 1);
                await incressLoop();
            } catch (error) {
                console.log(console.error());
            }
        })();
    }, []);

    return (
        <>
            <Nav />
            <main>
                <SearchBar />
                <Container pokemons={pokemons} showMorePokemons={showMorePokemons} />
            </main>
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Application />);
