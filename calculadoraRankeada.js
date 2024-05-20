let niveis = {};
const lsNiveis = [];

function criarNiveis(nome, condMin, condMax){
    niveis = {        
        nivel: nome,
        condMin: condMin,
        condMax: condMax        
    }
    return niveis;   
}

function exibriMsgFinal (sldVit, nivel){
    console.log("O Herói tem de saldo de "+ sldVit +" está no nível de "+nivel+"");
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

lsNiveis.push(criarNiveis("Ferro", -1000, 10));
lsNiveis.push(criarNiveis("Bronze", 11, 20));
lsNiveis.push(criarNiveis("Prata", 21, 50));
lsNiveis.push(criarNiveis("Ouro", 51, 80));
lsNiveis.push(criarNiveis("Diamante", 81 , 90));
lsNiveis.push(criarNiveis("Lendário", 91 , 100));
lsNiveis.push(criarNiveis("Lendário", 101  , 1000));


console.log(niveis.nivel + " - " + niveis.condMax);
console.log(lsNiveis[0].nivel);


//receber dados do sistema ou usuario
let qtdeVitorias = 115;
let qtdeDerrotas = 30
let saldoRankeada = calcSaldoRankeada(qtdeVitorias,qtdeDerrotas);

let nivelEncontrado = buscarNivelRankeada(saldoRankeada);
console.log("Nivel encontrado: "+nivelEncontrado);


exibriMsgFinal(saldoRankeada, nivelEncontrado);

//condicao para verificar o saldo