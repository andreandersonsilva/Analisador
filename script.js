//Primeiro vou criar a relação dos IDs dos campos onde serão inseridas as informações ou impressos os resultados

//Variável do primeiro campo
let num = document.getElementById("fnum")
//Variável do segundo campo
let lista = document.getElementById("flista")
//Variável do terceiro campo na DIV id="res" onde vão aparecer os resultados
let res = document.getElementById("res")
//Aqui eu criei um vetor
let valores = []

//Aqui eu criei as functions 
function isNumero(n){
    //Verificando se o número é maior que 1 e menor que 100 pois o programa não aceita valores menores ou maiores e ainda em branco
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

//Nesta function eu informo que ela vai receber dois valores, um número (n) e uma lista (l)
function inLista(n, l){
    //Se na lista o valor de n for diferente de -1 (-1 indica que o valor não foi encontrado na lista)
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    //Aqui vou verificar se o que estou inserindo é um número
    //Criei o isNumero (Nome que eu quiser) para verificar se é um número e também vai verificar se o número está na lista inLista(nome que eu
    //criei)
    //A lista inLista vai receber dois valores, um número e uma lista (var valores)
    if(isNumero(num.value) && !inLista(num.value, valores)){ 

        window.alert("Tudo OK")
    
    }else{
        //Senão estiver no formato que solicitei ele vai mostrar o alert
        alert("Valor inválido ou encontrado na lista!")
        }
}                   




