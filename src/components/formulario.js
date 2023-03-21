import React, { useState } from 'react';

function Formulario(){
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

	function handleSubmit(e){
		e.preventDefault();// adicionar persistencia de dados
		console.log(`nome: ${nome} email: ${email}`);
	}

	function handleChangeNome(e){
		setNome(e.target.value);
	}

    function handleChangeEmail(e){
		setEmail(e.target.value);
	}

    return(
        <form className="inputs" onSubmit={handleSubmit}>
			<input 
			    className="text_input"
                value={nome}
                onChange={handleChangeNome}
				type="text" 
				placeholder="digite seu nome"
			/>
			<input 
                className="text_input"
                value={email}
                onChange={handleChangeEmail}
				type="text" 
				placeholder="digite seu email"
			/>
			<input
				className="button"
				type="submit" 
				value="Cadastrar"
             />
		</form>
    )
}
export default Formulario;