import axios from "axios";
import { useEffect, useState } from "react";

export default function Modal(props) {
    const [info, setinfo] = useState([]);

    async function fetchPokemon(id) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const apidata = await response.data;
        return apidata;
    }

    useEffect(() => {
        (async () => {
            const data = await fetchPokemon(props.id);
            setinfo([data]);
        })();
    }, []);

    return (
        (info[0] && (
            <section className="modal">
                <button
                    onClick={() => {
                        props.showModal();
                    }}
                >
                    ❌
                </button>
                <img src={info[0].sprites.front_default}></img>
                <h3>Statics of {info[0].name}</h3>
                {info[0]["stats"].map((item) => {
                    return <BarStat item={item} key={item.stat.name} />;
                })}
            </section>
        )) || <h3>Carregando...</h3>
    );
}

function BarStat(props) {
    return (
        <>
            <div>
                <span>
                    {props.item.stat.name}
                    {props.item.base_stat}
                </span>
                <div className="progress" style={{ width: `255px` }}>
                    <div className="stat" style={{ width: `${props.item.base_stat}%` }}></div>
                </div>
            </div>
        </>
    );
}
