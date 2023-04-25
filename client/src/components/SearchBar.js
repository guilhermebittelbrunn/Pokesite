export default function SearchBar() {
    return (
        <>
            <section className="user-bar">
                <div className="search-input">
                    <input type="text" name="text" id="text" placeholder="name or id..."></input>
                    <span>search</span>
                </div>
                <div className="filter-select">
                    <select name="filter" id="filter">
                        <option value="1">Filter</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                    </select>
                </div>
            </section>
        </>
    );
}
