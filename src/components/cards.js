import "../styles/produtos.css"
import getImageUrl from "../utils";



function Card(props) {
    console.log(props.id)
    return (
        <div className="card">
            <div className="card_img">
                <img src={getImageUrl(props.id)} alt={props.nome} />
            </div>
            <h2>{props.nome}</h2>
            <p>{props.autor}</p>
            <div className="preco">R$ {props.preco.toFixed(2).replace('.',',')} </div>
            <p><a id="add" href="#">Adicionar ao carrinho</a></p>
        </div>
    );
}
export default Card;