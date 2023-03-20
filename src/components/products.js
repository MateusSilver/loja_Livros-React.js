import "../styles/produtos.css"
import Card from "./cards";
import "./produtos"
import { itens } from "./produtos";
import PropTypes from "prop-types";


function Produtos() {
    const cardsProduto = itens.map(item => (
        <Card key={item.id} idImg={item.id} nome={item.nome} autor={item.autor} preco={item.preco} />
    ));
      
    return (
        <div className="produtos-contend">
			<h1>Lançamentos da casa do livro</h1>
			<div id="produtos-line">{cardsProduto}</div>
		</div>
    );
};

Produtos.propTypes = {
    key:   PropTypes.number.isRequired,
    idImg: PropTypes.number.isRequired,
    nome:  PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired
}

export default Produtos;