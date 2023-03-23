import "../../styles/contend.css"

function Grid(){
    return(
        <div className="contend">
			<h1>The House of Literature</h1>
			<section className="highlights">
				<div className="principal_highlights"><a href="#"><h3>1618</h3></a></div>
				<div className="secundary_highlights"><h3>Quadrinhos</h3></div>
				<div className="secundary_highlights"><a href="Mangas.html"><h3>Mangás</h3></a></div>
				<div className="secundary_highlights"><h3>Terror</h3></div>
			</section>
		</div>
    )
}
export default Grid;