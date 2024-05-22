
/** Variaveis globais */
var form = document.getElementById('formulario');
let qtdeXp = 0;
let nomeJogador = "";
let niveis = {};
let nivelEncontrado = "";
const lsNiveis = [];

/** Modulo que pega o evento no botao ENVIAR do formulario (submit)
 *  1. carrega os modulos para apresentar a msg *  
 *  
 */
form.addEventListener("submit", function(event) {    

    nomeJogador = document.getElementById("nomeJogador").value;
    qtdeXp = parseInt(document.getElementById("hpJogador").value);
    //console.log("Nome jogador: " +nomeJogador+" xp: "+qtdeXp);
    if (validar()){
        onloadGame();    
    }else{
        alert("Campo vazio");    
        event.preventDefault();
        return (false);          
    }    

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

/** Funcao que alimenta a "base de dados" para condicionar o jogador confomr xp/nivel numa lista
 *  @event 1 O metodo: criarNiveis é chamado para alimentar a base de dados
 * 
 * @see criarNiveis()
 */
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

    //Exibir mensagem final obs: versao 1.0 usando alert ou confirm 
    // versao 1.2 -usando uma nova pagina para apresentação do resultado
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

function validar(){
    var campoUsuario = document.getElementById("nomeJogador").value;
    if(campoUsuario ==""){
        alert("O campo usuário esta vazio!");
        return(false);
    }else{
        return(true);
    }
}