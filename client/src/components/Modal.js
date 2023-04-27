import { HeartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Modal(props) {
    const { info, isLoading, error } = useFetch(props.id);
    const [data, setData] = useState(info);

    console.log(data);
    async function changeModal() {
        props.showModal();
    }
    return (
        (!isLoading && (
            <section className="modal">
                <button className="btn-exit" onClick={changeModal}>
                    ❌
                </button>
                <img src={info.sprites.front_default}></img>
                <h3>Statics of {info.name}</h3>
                {info['stats'].map((item) => {
                    return <BarStat item={item} key={item.stat.name} />;
                })}
                <div className="modal-btns">
                    <div className="prevent">
                        <button
                            onClick={() => {
                                props.changeId(-1);
                            }}
                        >
                            prevent
                        </button>
                    </div>
                    <HeartOutlined />
                    <div className="next">
                        <button
                            onClick={() => {
                                props.changeId(+1);
                            }}
                        >
                            next
                        </button>
                    </div>
                </div>
            </section>
        )) || (
            <section className="modal">
                <h3>Carregando...</h3>
            </section>
        )
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
                <div className="progress" style={{ width: `300px` }}>
                    <div
                        className="stat"
                        style={{
                            width: `${props.item.base_stat * 2}px`,
                            backgroundColor: `${props.item.base_stat > 150 ? '#B22222' : 'green'}`,
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
}
