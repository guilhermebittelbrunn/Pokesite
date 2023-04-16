import Card from './components/CardPoke.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        for (let i = 1; i <= 30; i++) {
            findData(i);
        }
    }, []);

    async function findData(i) {
        await axios.get('https://pokeapi.co/api/v2/pokemon/' + i).then((res) => {
            setData((preventValue) => {
                return [...preventValue, res.data];
            });
        });
    }

    for (let poke of data) {
        console.log(poke.name, poke.id);
    }

    return (
        <>
            <h4>Site</h4>
            <Card data={data} />
        </>
    );
}

export default App;
