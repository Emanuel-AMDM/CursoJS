function processar(){
    //variaveis
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')

    //checa se os campos foram preenchidos
    if(inicio.value == '' || fim.value == '' || passo.value == ''){
        alert(`Preencha todos os campos`)
    }else if(passo.value == 0){
        alert(`Passo nao pode ser 0`)
    }

    //variavel da resposta
    var res = document.querySelector('div#res')
    
    //transformando variaveis em numeros para o calculo
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)
    
    //imprime uma frase antes do contador imprimir os valores
    res.innerHTML = `Contando: <br>`
    
    //imprime os valores
    for(i = inicio; i <= fim; i += passo){

        //imprime todos os valores e nao apenas só 1
        res.innerHTML += ` - ${i}`
    }
}