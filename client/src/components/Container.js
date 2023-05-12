import Card from './CardPoke';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

export default function Container(props) {
    const [pokemons, setPokemons] = useState([]);
    const [loop, setLoop] = useState({ start: 50, end: 100 });
    const { load, setLoad } = props;

    async function fetchPokemons(start, end, skip) {
        const data = [];
        const teste = [];
        setLoad(true);
        try {
            for (let i = start; i <= end; i += 1) {
                // const apiresolve = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                // const apijson = await apiresolve.data;
                // data.push(apijson);
                teste.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
            }
            const testezao = await axios.all(
                teste.map(async (link) => {
                    const { data } = await axios.get(link);
                    return data;
                })
            );
            setPokemons((preventValue) => {
                setLoad(false);
                return [...preventValue, ...testezao];
            });
        } catch (err) {
            return err;
        } finally {
        }
    }

    function incressLoop() {
        setLoop({ ['start']: loop.start + 25, ['end']: loop.end + 25 });
    }

    async function showMorePokemons() {
        await fetchPokemons(loop.start, loop.end, 1);
        incressLoop();
    }

    useEffect(() => {
        (async () => {
            try {
                await fetchPokemons(loop.start, loop.end, 1);
                incressLoop();
            } catch (error) {
                console.log(console.error());
            }
        })();
    }, []);

    return (
        <>
            <section className="container">
                <div className="container_cards">
                    {pokemons.map((pokemon, k) => {
                        return <Card pokemon={pokemon} key={k} id={k} showModal={props.showModal} />;
                    })}
                </div>
                <div>
                    {!load && <ShowMore showMorePokemons={showMorePokemons} />}
                    {load && <LoadField />}
                </div>
            </section>
        </>
    );
}

function ShowMore(props) {
    return (
        <>
            <button className="btn-show-more" onClick={props.showMorePokemons} key="1A">
                Show more
            </button>
        </>
    );
}

function LoadField() {
    return (
        <>
            <div className="load-field">
                <h3>Carregando...</h3>
                <div className="load"></div>
            </div>
        </>
    );
}
