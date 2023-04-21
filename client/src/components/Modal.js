import axios from "axios";
import { useEffect, useState } from "react";

export default function Modal(props) {
    const [stats, setStats] = useState([]);
    async function fetchPokemon(id) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const apidata = await response.data;
        return apidata;
    }

    function show() {
        for (const key in stats.stats) {
            console.log(key);
        }
    }

    useEffect(() => {
        (async () => {
            const data = await fetchPokemon(props.id);
            setStats(data.stats);
        })();
    }, []);

    return (
        <section className="modal">
            <button
                onClick={() => {
                    props.showModal();
                }}
            >
                ❌
            </button>
            {/* <img></img> */}
            <h3>section</h3>;
            {stats.map((item) => {
                return <BarStat item={item} />;
            })}
        </section>
    );
}

function BarStat(props) {
    return (
        <>
            <div>
                <span>
                    {console.log(props.item)}
                    {props.item.stat.name}
                    {props.item.base_stat}
                </span>
                <div className="progress"></div>
            </div>
        </>
    );
}
