//variavel de vetor
var valores = [8,1,7,4,2,9]

//loop para imprimir os vetores
// for(i = 0; i <= valores.length; i++){
//     console.log(`A posição ${i} tem valor ${valores[i]}`)
// }

//loop simplificado para vetores
//para cada posição em i vou mostrar valores[i]
for(i in valores){
    console.log(`A posição ${i} tem valor ${valores[i]}`)
}