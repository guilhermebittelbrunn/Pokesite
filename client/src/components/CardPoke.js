function Card(props) {
    const type_colors = [
        "normal",
        "fire",
        "water",
        "electric",
        "grass",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "dark",
        "steel",
        "fairy",
    ];

    const code_colors = [
        "#A8A878",
        "#F08030",
        "#6890F0",
        "#F8D030",
        "#78C850",
        "#98D8D8",
        "#C03028",
        "#A040A0",
        "#E0C068",
        "#A890F0",
        "#F85888",
        "#A8B820",
        "#B8A038",
        "#705898",
        "#7038F8",
        "#705848",
        "#B8B8D0",
        "#EE99AC",
    ];

    function setColor(type) {
        const index = type_colors.findIndex((item) => {
            return item === type;
        });
        const color = code_colors[index];
        return color;
    }

    return (
        <>
            <div
                className="card"
                key={props.pokemon.id + props.pokemon.name}
                id={props.pokemon.id}
                onClick={() => {
                    props.showModal(props.pokemon.id);
                }}
            >
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
                            return (
                                <h4
                                    key={type.type.name + props.pokemon.id}
                                    style={{ backgroundColor: setColor(type.type.name) }}
                                >
                                    {type.type.name}
                                </h4>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
