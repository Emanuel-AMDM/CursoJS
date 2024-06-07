//function gerar tabuada
function gerar(){
    //variaveis
    var numero = document.querySelector('input#numero')
    var tabuada = document.querySelector('select#tabuada')

    //checa se foi digitado um numero
    if(numero.value == ''){
        alert(`Digite um numero`)
    }

    //transforma o numero em numbeer, se nao, nao faz conta
    var numero = Number(numero.value)
    //inicio do while
    var i = 1
    //quando roda a function ele gera esse innertext para limpar o que ja tinha e aparecer so o while
    tabuada.innerHTML = ''

    while(i <= 10){
        //criando campo option dentro do select
        var item = document.createElement('option')

        //imprime o valor da option no select
        item.text = `${numero} x ${i} = ${numero*i}`

        //cria value da option
        item.value = `tabuada${i}`

        //local onde vai criar o campo e qual campo é
        tabuada.appendChild(item)

        //contagem de quantas vezes ele vai roda
        i++
    }
} 