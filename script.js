let nump = window.document.getElementById('num')
let fim = window.document.getElementById('locnum')
let res = document.querySelector('div#res')
let valores = [] // é nesse que vai analisar os dados 

/*SE cria o isNumero e o inlista sao funçoes criadadas por vc para poder analisar os dados pode ser qualquer nome é voce quem escolhe */

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

// o -1 significa que ja pesquisou dentro do vetor,mas nao tem nenhuma ocorrência e nada foi encontrado

function inLista(m){
    if(m.indexOf(Number(n)) != -1){
    return true;
   } else {
     return false;
   } 
}

function adicionar() {
    if(isNumero(num.value) && inLista(num.value)){

    }
}
function finalizar(){

}


// o codigo esta no exercicio 16
