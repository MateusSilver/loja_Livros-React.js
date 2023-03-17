import SearchBar from "./searchbar";

function Menu(){
    return (
        <nav>
            <ul>
				<li>Home</li>
				<li>Sobre nós</li>
			</ul>
			<SearchBar/>
		</nav>
    )
}

export default Menu;