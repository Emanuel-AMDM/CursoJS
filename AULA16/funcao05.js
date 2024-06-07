// function fatorial 2
function fatorial(n){
    //checa se o numero é 1, pois fator de 1 é 1
    if(n == 1){
        //retorna o valor
        return 1
    }else{
        //se nao for 1 ele faz o calculo do fatorial simplificado e retorno
        return n * fatorial(n-1)
    }
}

//recursividade se chama essa function de cima

//imprime e passa o valor por ele mesmo
console.log(fatorial(5))