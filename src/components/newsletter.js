import "../styles/cadastro.css"

function Newsletter(){

	function cadastrarNewsletter(e){
		e.preventDefault();//retirar e inserir ajax requisition
		console.log(`bem vindo`);
	}

    return(
        <div className="cadastro">
			<div className="box">
				<h1>Cadastre-se e entre em casa</h1>
				<p>assine nosso newletter e receba as ultimas promoções em livros de todo tipo</p>
				<form className="inputs" onSubmit={cadastrarNewsletter}>
					<input 
					    className="text_input"
					    id="nome"
					    type="text" 
					    placeholder="digite seu nome"
					/>
					<input 
                        className="text_input"
						id="email"
						type="text" 
						placeholder="digite seu email"
					/>
					<input
						className="button"
						type="submit" 
						value="Cadastrar"
                    />
				</form>
			</div>
		</div>
    )
}

export default Newsletter;