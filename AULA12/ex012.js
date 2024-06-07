//busca data, hora, sempre new date
var agora = new Date()
//busca pela hora, mas essa variavel quando coloca o get ele mostra as outras opções, de minuto, hora, segundo, dia, ano, etc
var hora  = agora.getHours()

console.log(`Agora são ${hora} horas`)

if(hora < 12){
    console.log(`De manha, nao me acorde`)
}else if(hora >= 12){
    console.log(`Esta de tarde, hora do fortnite`)
}else if(hora >= 18){
    console.log(`Esta de noite, hora de f1`)
}