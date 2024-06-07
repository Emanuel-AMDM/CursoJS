//variaveis
var numero = document.querySelector('input#numero')
var select = document.querySelector('select#select')
var res    = document.querySelector('div#res')
var valores = []

//function para checar se o numero esta entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

//function para checar se o numero ja existe dentro da lista
function inLista(n, l){
    //checa se o numero ja existe no array
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//function para adicionar valores no select
function adicionar(){
    //consição para checar se é um numero entre 1 e 100 e se nao existe na lista
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        //adiciona valores da variavel no array
        valores.push(Number(numero.value))
        //cria option e adiciona dentro do select
        var item = document.createElement('option')
        //texto que vai aparecer na option adicionada no select
        item.text = `Valor ${numero.value} Adicionado`
        //cria value para a option do select
        item.value = `contado${numero.value}`
        //cria a tag option para o select
        select.appendChild(item)
        //quando adicinar numero depois de clicar no finalizar ele limpa as informações da function finalizar
        res.innerHTML = ''
    }else{
        alert('Valor invalido ou já encontrado na lista')
    }
    //apaga o que ta escrito no campo após adicionar o valor
    numero.value = ''
    numero.focus()
}

function finalizar(){
    //checa se existe algum valor dentro da lista de numeros
    if(valores.length == 0){
        alert(`Adicione valores antes de finalizar`)
    }else{
        //variaveis
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        //(percorre todo o array) para ver qual maior e menor numero
        for(i in valores){
            //soma todos os valores que estao rodando no for
            soma += valores[i]

            //vai checando cada valor e armazendo na variavel, ele so vai guardar o maior valor
            if(valores[i] > maior){
                maior = valores[i]
                //vai checando cada valor e armazendo na variavel, ele so vai guardar o menor valor
            }else if(valores[i] < maior){
                menor = valores[i]
            }
        }
        //faz a media com o valor total da soma, e o total de valores
        media = soma / total

        //imprime na tela os resultado
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A media de valore é ${media}.</p>`
    }
}