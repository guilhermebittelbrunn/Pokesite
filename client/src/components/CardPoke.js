function Card(props) {
    return (
        <>
            <div className="card" key={props.pokemon.id} id={props.pokemon.id}>
                <div className="card-header">
                    <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name}></img>
                </div>
                <div className="card-body">
                    <div className="card-body-info">
                        <h3>{props.pokemon.name}</h3>
                        <p>#{props.pokemon.id}</p>
                    </div>
                    <div className="card-body-type">
                        {props.pokemon.types.map((type) => {
                            return <h4>{type.type.name}</h4>;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
