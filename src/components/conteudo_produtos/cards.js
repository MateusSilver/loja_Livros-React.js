import "../../styles/produtos.css"
import PropTypes from "prop-types";


function Card(props) {
    function addCarrinho(event){
        event.preventDefault();
        props.quantidade++;
        console.log(`${props.nome} quant.: ${props.quantidade}`)
    }

    let imagem = require(`../../img/produtos/${props.idImg}.jpg`)
    
    return (
        <div className="card" key={props.id}>
            <div className="card_img">
                <img src={imagem} alt={props.nome} />
            </div>
            <h2>{props.nome}</h2>
            <p>{props.autor}</p>
            <div className="preco">R$ {props.preco.toFixed(2).replace('.',',')} </div>
            <p>
                <a id="add" href="#" onClick={addCarrinho}>Adicionar ao carrinho</a> 
            </p>
        </div>
    );
}

Card.propTypes = {
    key: PropTypes.number.isRequired
}

Card.defaultProps = {
    idImg: 0,
    nome: 'título desconhecido',
    autor: 'autor desconhecido',
    preco: 20.00,
    quantidade: 0
}

export default Card;