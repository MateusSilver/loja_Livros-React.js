import "../styles/cadastro.css"

function Newsletter(){
    return(
        <div className="cadastro">
			<div className="box">
				<h1>Cadastre-se e entre em casa</h1>
				<p>assine nosso newletter e receba as ultimas promoções em livros de todo tipo</p>
				<div className="inputs">
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
					<input onclick="cadastrar()"
						className="button"
						type="button" 
						value="Cadastrar"
                    />
				</div>
			</div>
		</div>
    )
}

export default Newsletter;