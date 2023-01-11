/**
 * Usar sempre var ou let 
 * Const se usa como se fosse funçao
 */


const buttonAdicionar = document.querySelector('#adicionar')
var select = document.querySelector('#select')
const buttonFinalizar = document.querySelector('#finalizar')


buttonAdicionar.addEventListener('click', function(e){

    let inputNumero = document.querySelector('#num').value

    if(inputNumero ==! 0){

        if (inputNumero > 100 && inputNumero < 1){
            return alert('Prencha o valor entre 1 e 100')
        } else {
            return alert('deu errado')
        }

    } else {
        return alert('Não deixe nenhum espaço em branco')
    }
})
