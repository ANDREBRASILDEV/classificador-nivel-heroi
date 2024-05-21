//var nomeUsuario = document.getElementById('nomeJogador');
//variavel que pega os parametros passados na URL na chamada do popup
const params = new URLSearchParams(location.search);

// Laço que percorre todos os parametros passados para o popup
for (let p of params) {
    console.log(p);
}

//variaveis que abstrai os valores dos parametros e lançados na pagina corrente
let nomeJogador = params.get('nomeJogador');
let nivelEncontrado = params.get('nivelEncontrado');

console.log("Nome do jogado é: "+ nomeJogador+" e seu nivel é: "+nivelEncontrado);

//apresentar a mensagem na tela popup
document.querySelector('#nomeJogador').innerHTML = nomeJogador;
document.querySelector('#nivelEncontrado').innerHTML = nivelEncontrado;
