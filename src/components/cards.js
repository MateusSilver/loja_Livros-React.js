import "../styles/produtos.css"
import PropTypes from "prop-types";


function Card(props) {

    function addCarrinho(){
        props.quantidade++;
    }

    let imagem = require(`../img/produtos/${props.idImg}.jpg`)
    return (
        <div className="card">
            <div className="card_img">
                <img src={imagem} alt={props.nome} />
            </div>
            <h2>{props.nome}</h2>
            <p>{props.autor}</p>
            <div className="preco">R$ {props.preco.toFixed(2).replace('.',',')} </div>
            <p><a id="add" href="#" onClick={addCarrinho}>Adicionar ao carrinho</a></p>
        </div>
    );
}

Card.propTypes = {
    idImg: PropTypes.number,
    nome: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    preco: PropTypes.number
}

Card.defaultProps = {
    idImg: 0,
    nome: 'título desconhecido',
    autor: 'autor desconhecido',
    preco: 20.00
}

export default Card;