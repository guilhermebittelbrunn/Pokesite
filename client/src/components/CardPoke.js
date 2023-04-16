function Card(props) {
    return (
        <ul>
            {props.data.map((item, k) => {
                return (
                    <li key={item.id} id={item.id}>
                        <h3>{item.name}</h3>
                        <h4>{item.id}</h4>
                        <h4>{k}</h4>
                    </li>
                );
            })}
        </ul>
    );
}

export default Card;
