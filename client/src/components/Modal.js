import axios from "axios";
import { HeartOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Modal(props) {
    const { data, isLoading } = useFetch(25);

    async function teste2(e) {
        console.log(data, isLoading);
    }

    return <button onClick={teste2}>click</button>;
}

//     async function fetchPokemon(id) {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         const apidata = await response.data;
//         return apidata;
//     }

//     async function changeModal() {
//         // const data = await useFetch(props.id);
//         // setdata(data);
//         props.showModal();
//     }

//     return (
//         (data && (
//             <section className="modal">
//                 <button className="btn-exit" onClick={changeModal}>
//                     ❌
//                 </button>
//                 <img src={data[0].sprites.front_default}></img>
//                 <h3>Statics of {data[0].name}</h3>
//                 {data[0]["stats"].map((item) => {
//                     return <BarStat item={item} key={item.stat.name} />;
//                 })}
//                 <div className="modal-btns">
//                     <div className="prevent">
//                         <button>prevent</button>
//                     </div>
//                     <HeartOutlined />
//                     <div className="next">
//                         <button>next</button>
//                     </div>
//                 </div>
//             </section>
//         )) || <h3>Carregando...</h3>
//     );
// }

// function BarStat(props) {
//     return (
//         <>
//             <div>
//                 <span>
//                     {props.item.stat.name}
//                     {props.item.base_stat}
//                 </span>
//                 <div className="progress" style={{ width: `300px` }}>
//                     <div
//                         className="stat"
//                         style={{
//                             width: `${props.item.base_stat * 2}px`,
//                             backgroundColor: `${props.item.base_stat > 150 ? "#B22222" : "green"}`,
//                         }}
//                     ></div>
//                 </div>
//             </div>
//         </>
//     );
// }
