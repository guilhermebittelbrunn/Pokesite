import Card from './CardPoke';

export default function Container(props) {
    return (
        <>
            <section className="container">
                {props.pokemons.map((pokemon) => {
                    return <Card pokemon={pokemon} />;
                })}
                <ShowMore showMorePokemons={props.showMorePokemons} key="12aa3" />
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
            >
                Show more
            </button>
        </>
    );
}
