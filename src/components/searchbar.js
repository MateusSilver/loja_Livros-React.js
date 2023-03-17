import "../styles/search_box.css"

function SearchBar(){
    return (
        <div class="search_box">
			<input class="search_txt"
				type="text" 
			    name="" 
			    placeholder="Buscar"
			/>
			<a href="Buscar" class="Search_btn">
			    <span class="btn_click">🔍</span>
			</a>					
		</div>
    )
}

export default SearchBar;