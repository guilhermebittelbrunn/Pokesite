import Card from './CardPoke';

export default function Container(props) {
    return (
        <>
            <section className="container">
                {props.pokemons.map((pokemon, k) => {
                    return <Card pokemon={pokemon} key={k} id={k} />;
                })}
                <ShowMore showMorePokemons={props.showMorePokemons} />
            </section>
        </>
    );
}

function ShowMore(props) {
    return (
        <>
            <button
                style={{ width: '600px', backgroundColor: 'darkred', color: 'white', fontSize: '32px' }}
                onClick={props.showMorePokemons}
                key="1A"
            >
                Show more
            </button>
        </>
    );
}
