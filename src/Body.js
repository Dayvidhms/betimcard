import cartao from "./img/cartao.png";

function Body(){
    return(
        <div id="main">
            <img src={cartao}></img>

            <div id="boxcliente">
                Realize a recarga do seu BetimCard, acessando um dos links abaixo, conforme o seu perfil.
            </div>
        </div>
    );
}

export default Body;