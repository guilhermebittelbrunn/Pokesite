import Card from './components/CardPoke.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App(props) {
    const [data, setData] = useState([]);
    const [text, setText] = useState();

    async function getAllPokemons(interval) {
        for (let i = 1; i <= interval; i++) {
            const apiData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const pokeData = await apiData.data;
            setData((preventValue) => {
                return [...preventValue, pokeData];
            });
        }
    }

    async function getOnePokemon(index) {
        let apiData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
        let pokeData = await apiData.data;
        setData([pokeData]);
    }

    async function searchPokemon(e) {
        (async () => {
            await setText(e.target.value);
            console.log(text);
        })();

        // let tamanho = String(inputValue).length;
        // setData(
        //     data.filter((poke) => {
        //         let pokenome = String(poke.name).slice(0, tamanho);
        //         // console.log(pokenome, '-', text);
        //         if (pokenome === inputValue) {
        //             console.log(poke);
        //             return poke;
        //         }
        //     })
        // );
    }

    function showText() {
        console.log(text);
    }

    // useEffect(() => {
    //     getAllPokemons(50);
    //     // getOnePokemon('c');
    //     console.log(data);
    // }, []);

    return (
        <>
            <h4>Site</h4>
            <input type="text" onChange={searchPokemon}></input>
            <button onClick={showText}>{'Click'}</button>
            <Card data={data} />
        </>
    );
}

export default App;
