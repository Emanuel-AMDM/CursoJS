//function para achar fatorial
function fatorial(n){
    //variavel 
    var fat = 1
    //loop para fatorar
    for(i = n; i >1; i--){
        //calculo fator
        fat *= i
    }
    //retorna o valor
    return fat
}

// imprime na tela o retorno da function passando o parametro por ele mesmo
console.log(fatorial(5))