
/** Variaveis globais */
var form = document.getElementById('formulario');
let qtdeXp = 0;
let nomeJogador = "";
let niveis = {};
let nivelEncontrado = "";
const lsNiveis = [];

/** Modulo que pega o evento no botao ENVIAR do formulario
 *  1. carrega os modulos para apresentar a msg
 *  2. não há tratamento nos campos ainda
 *  3. 
 */
form.addEventListener("submit", function(event) {    

    nomeJogador = document.getElementById("nomeJogador").value;
    qtdeXp = parseInt(document.getElementById("hpJogador").value);
    //console.log("Nome jogador: " +nomeJogador+" xp: "+qtdeXp);

    onloadGame();

    event.preventDefault();

  });


/** Funcao CriarNiveis responsavel por criar os niveis do jogo
 * @param {*} nome : nomenclatura do nivel a ser criado
 * @param {*} condMin : Condicao minima para entrar no nivel 
 * @param {*} condMax : Condicao maxima para entrar no nivel
 */
function criarNiveis(nome, condMin, condMax){
    niveis = {        
        nivel: nome,
        condMin: condMin,
        condMax: condMax        
    }
    return niveis;   
}


function exibriMsgFinal (sldVit, nivel, nome){
    //console.log("O Herói tem de saldo de "+ sldVit +" está no nível de "+nivel+"");
    console.log("O Herói de nome "+nome+" está no nível de "+nivel+"");
}

function calcSaldoRankeada(numVit, numDer){
    return numVit-numDer;
}

//funcao busca o nivel que esta o usuario/jogador confome o saldoRankeada
function buscarNivelRankeada(sldRank){
    let achou = "";         
    lsNiveis.forEach(element => {
        if (sldRank > element.condMin && sldRank <= element.condMax) {                
            achou = element.nivel;
         }        
    });
     return achou;
}

function redirecionarPageResultado(){
    //window.location.assign("http://pt.stackoverflow.com");
    //window.location.assign("resultado.html");
    newPopup();
}


function onloadGame(){
    //Alimentando os niveis do jogo
    lsNiveis.push(criarNiveis("Ferro", -100000, 1000));
    lsNiveis.push(criarNiveis("Bronze", 1001, 2000));
    lsNiveis.push(criarNiveis("Prata", 2001, 5000));
    lsNiveis.push(criarNiveis("Ouro", 5001, 7000));
    lsNiveis.push(criarNiveis("Platina", 7001 , 8000));
    lsNiveis.push(criarNiveis("Ascendente", 8001 , 9000));
    lsNiveis.push(criarNiveis("Imortal", 9001 , 10000));
    lsNiveis.push(criarNiveis("Radiante", 10001  , 100000));

    nivelEncontrado = buscarNivelRankeada(qtdeXp);
    //console.log("Nivel encontrado: "+nivelEncontrado);

    //Exibir mensagem final obs: usar console ou confirm
    exibriMsgFinal(qtdeXp, nivelEncontrado, nomeJogador);
    redirecionarPageResultado();

}

function newPopup(){
    
    varWindow = window.open (
        "resultado.html?nomeJogador="+nomeJogador+"&nivelEncontrado="+nivelEncontrado, 
        'popup',
        "width=500, height=500, top=100, left=110, scrollbars=no",
        
    )
    }