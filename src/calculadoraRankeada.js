
//const message = 'Hello world' // Try edit me
// Update header text
//let nomeJogador1 = document.getElementById('nomeJogador');
// Log to console
//console.log(nomeJogador1.value)

var form = document.getElementById('formulario');
let nomeJogador1 = document.getElementById('nomeJogador');

let nome1 = "";

let qtdeXp = 0;
let nomeJogador = "";

form.addEventListener("submit", function(event) {    

    nomeJogador = document.getElementById("nomeJogador").value;
    qtdeXp = parseInt(document.getElementById("hpJogador").value);
    console.log("Nome jogador: " +nomeJogador+" xp: "+qtdeXp);

    event.preventDefault();
   // Faça algo com os valores obtidos
  });
console.log(nome1);
console.log("Nome jogador: "+ nomeJogador1);


let niveis = {};
const lsNiveis = [];

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

//Alimentando os niveis do jogo
lsNiveis.push(criarNiveis("Ferro", -100000, 1000));
lsNiveis.push(criarNiveis("Bronze", 1001, 2000));
lsNiveis.push(criarNiveis("Prata", 2001, 5000));
lsNiveis.push(criarNiveis("Ouro", 5001, 7000));
lsNiveis.push(criarNiveis("Platina", 7001 , 8000));
lsNiveis.push(criarNiveis("Ascendente", 8001 , 9000));
lsNiveis.push(criarNiveis("Imortal", 9001 , 10000));
lsNiveis.push(criarNiveis("Radiante", 10001  , 100000));


//receber dados do sistema ou usuario
//let qtdeVitorias = 115;
//let qtdeDerrotas = 30;
//let saldoRankeada = calcSaldoRankeada(qtdeVitorias,qtdeDerrotas);


//let qtdeXp = 11000;
//let nomeJogador = "André Dev";

let nivelEncontrado = buscarNivelRankeada(qtdeXp);
console.log("Nivel encontrado: "+nivelEncontrado);

//Exibir mensagem final obs: usar console ou confirm
exibriMsgFinal(qtdeXp, nivelEncontrado, nomeJogador);

