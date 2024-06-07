//function com parametro

function parimpar(n) {
    
    //consição para ver se é impar ou par
    if(n % 2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }

}

//imprime o valor passando o parametro para function
console.log(parimpar(4))