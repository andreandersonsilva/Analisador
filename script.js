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
        //Meus valores serão adicionados no vetor (PUSH adiciona um elemento no vetor)
        valores.push(Number(num.value))
        //Para adicionar no select eu tenho que criar um option e primeiro crio um item
        let item = document.createElement("option")
        //O item tem o valor text
        item.text = `Valor ${num.value} adicionado`
        //Pra adicionar na lista a mensagem acima
        lista.appendChild(item)
        //Quando os valores são inseridos e clico em finalizar ele me mostra um resultado, porém se eu quiser 
        //continuar adicionado valores após clicar em finalizar ele deve limpar os campos pois serão outros
        //resultados e pra isso eu incluio no código:
        //(RES) ele vai limpar o campo do ID=RES onde estão sendo impressos os resultados
        res.innerHTML=""
       
    
    }else{
        //Senão estiver no formato que solicitei ele vai mostrar o alert
        alert("Valor inválido ou encontrado na lista!")
        }

        //Aqui estou automatizando o campo para após a inserção do valor ele limpar o campo
        num.value = ""
        //Complementando o código acima, o focus() indica o campo que deve ser limpo, como se clicasse com o mouse
        num.focus()
}                   

function finalizar(){

    if(valores.length == 0){
        alert(`Adicione valores antes de finalizar`)
    }else{
        //Verificar o total de elementos adicionados
        var tot = valores.length
        //Para verificar qual o maior valor e menor
        var maior = valores[0]
        var menor = valores[0]
        //Criando a variável soma
        var soma = 0
        var media = 0
        for(var pos in valores){
            //Aqui eu estou fazendo a soma de todos os valores inseridos 
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
            }
        }

        //Aqui eu criei a média dos valores inseridos, acima já foi criada a variável média e abaixo é feita a 
        //impressão
        media = soma / tot

        //Para imprimir as variáveis informadas
        res.innerHTML+=""
        res.innerHTML+=`<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML+=`<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML+=`<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML+=`<p>somando todos os valores temos ${soma}</p>`
        res.innerHTML+=`<p>A média dos valores é ${media}</p>`
    }



}


