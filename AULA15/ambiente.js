var numero = [5,8,9,2,3]

//coloca meu vetor em ordem crescente
numero.sort()
console.log(`Em ordem ${numero}`)

//adiciona na posição desejada
numero[5] = 10
console.log(`O valor do vetor nessa posição é ${numero[5]}`)

//adiciona ao fim no meu vetor
//se o sort tiver antes desse push o push vai pro final independente da ordem
numero.push(15)

//conta a quantidade de elementos do vetor
numero.length
console.log(`O vetor tem ${numero.length} posições`)

//busca um valor pela posição, se o valor nao existir em nenhuma posição ele volta -1
var pos = numero.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)