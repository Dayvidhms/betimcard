import cartao from "./img/cartao.png";
import boxcliente from "./img/box_cliente.jpg";
import conforto from "./img/box_conforto.jpg";
import seguranca from "./img/box_seguranca.jpg";

function Body(){
    return(
        
        <div id="main">
            <div className="grid-item" id="leftside">
                <img id="imagemcartao" src={cartao} alt="Área de cliente"></img>
            </div>
            <div className="grid-item" id="rightside">
                <div id="boxcliente">
                    <img src={boxcliente} alt="Área de cliente"></img>
                    <p>Realize a recarga do seu BetimCard, acessando um dos links abaixo, conforme o seu perfil.</p>
                </div>
            </div>
            <div id="downside">
                <div className="boxcontent" id="boxcontent1">
                    <img id="imagemconforto" src={conforto} alt="Mais conforto"></img>
                    <p>- Embarque mais rápido, sem filas.
                        - Você não precisa mais carregar moedinhas e papeis.
                        - Troco não é mais problema.
                        - Fácil de adquirir e recarregar.
                        É só ir à loja do BetimCard ou pelo site.
                    </p>
                </div>

                <div className="boxcontent" id="boxcontent2">
                    <img id="imagemseguranca" src={seguranca} alt="Mais segurança"></img>
                    <p>O cartão é recarregavel. 
                        Pode durar até cinco anos.
                        Com menos dinheiro circulando, os assaltos vão diminuir.
                        Em caso de perda ou roubo do seu BetimCard Cidadão, é só ligar (31) 3594-1118 | 3594-6591 (8h às 17h30) e pedir o bloqueio. Os créditos não utilizados podem ser transferidos para um novo cartão.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Body;