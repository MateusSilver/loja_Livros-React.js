import "../styles/search_box.css"

function SearchBar(){
    return (
        <div className="search_box">
			<input className="search_txt"
				type="text" 
			    name="" 
			    placeholder="Buscar"
			/>
			<a href="Buscar" className="Search_btn">
			    <span className="btn_click">🔍</span>
			</a>					
		</div>
    )
}

export default SearchBar;