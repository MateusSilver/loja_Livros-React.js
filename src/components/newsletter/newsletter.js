import "../../styles/cadastro.css"
import Formulario from "./formulario";

function Newsletter(){

    return(
        <div className="cadastro">
			<div className="box">
				<h1>Cadastre-se e entre em casa</h1>
				<p>assine nosso newletter e receba as ultimas promoções em livros de todo tipo</p>
				<Formulario/>
			</div>
		</div>
    )
}

export default Newsletter;