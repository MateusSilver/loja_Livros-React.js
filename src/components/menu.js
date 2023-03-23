import SearchBar from "./searchbar";
import UserArea from "./userarea";

function Menu(){
    return (
        <nav>
            <ul>
				<li>Home</li>
				<li>Sobre nós</li>
			</ul>
			<SearchBar/>
			<UserArea/>
		</nav>
    )
}

export default Menu;