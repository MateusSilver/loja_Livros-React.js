import "../styles/produtos.css"
import Card from "./cards";
import "./produtos"
import { itens } from "./produtos";



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
export default Produtos;