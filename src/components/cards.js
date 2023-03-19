import "../styles/produtos.css"


function Card(props) {
    console.log(props.idImg)
    let imagem = require(`../img/produtos/${props.idImg}.jpg`)
    return (
        <div className="card">
            <div className="card_img">
                <img src={imagem} alt={props.nome} />
            </div>
            <h2>{props.nome}</h2>
            <p>{props.autor}</p>
            <div className="preco">R$ {props.preco.toFixed(2).replace('.',',')} </div>
            <p><a id="add" href="#">Adicionar ao carrinho</a></p>
        </div>
    );
}
export default Card;