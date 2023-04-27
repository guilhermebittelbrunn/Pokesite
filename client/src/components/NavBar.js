export default function NavBar() {
    let lista = [];
    async function show() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/12');
        const data = response.json();
        return data;
    }

    return (
        <>
            <nav>
                <h3></h3>
                <ul></ul>
            </nav>
        </>
    );
}
