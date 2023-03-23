import "../../styles/produtos.css"
import Card from "./cards";
import "./database_produtos"
import PropTypes from "prop-types";
import { itens } from "./database_produtos";

//let itens = []

function Produtos() {

    const cardsProduto = itens.length > 0 ? itens.map(item => (
        <Card key={item.id} idImg={item.id} nome={item.nome} autor={item.autor} preco={item.preco} quantidade={item.quantidade} />
    )) : (<p>Não há produtos :/</p>);
      
    return (
        <div className="produtos-contend">
			<h1>Lançamentos da casa do livro</h1>
			<div id="produtos-line">{cardsProduto}</div>
		</div>
    );
};

Produtos.propTypes = {
    key:   PropTypes.number.isRequired,
    idImg: PropTypes.number,
    nome:  PropTypes.string,
    autor: PropTypes.string,
    preco: PropTypes.string
}

export default Produtos;