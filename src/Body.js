import cartao from "./img/cartao.png";
import boxcliente from "./img/box_cliente.jpg";

function Body(){
    return(
        <div id="main">
            <div className="grid-item">
                <img src={cartao} alt="Área de cliente"></img>
            </div>

            <div className="grid-item">
                <div id="boxcliente">
                    <img src={boxcliente}></img>
                    <p>Realize a recarga do seu BetimCard, acessando um dos links abaixo, conforme o seu perfil.</p>
                </div>
            </div>
        </div>
    );
}

export default Body;