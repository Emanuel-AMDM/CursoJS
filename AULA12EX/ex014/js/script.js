function carregar(){
    //variaveis
    var msg = document.querySelector('div#msg')
    var foto = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()

    //mostra uma mensagem na tela
    msg.innerHTML = `Agora são ${hora} horas.`

    //condição
    if(hora >= 0 && hora <= 11){
        //mostra uma mensagem
        msg.innerHTML = `Agora são ${hora} horas. Bom dia.`
        //mostra a imagem
        foto.src = 'img/manha.jpg'
        //muda cor do body
        document.body.style.background = 'yellow'
    }else if(hora >= 12 && hora <=18){
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde.`
        foto.src = 'img/tarde.jpg'
        document.body.style.background = 'blue'
    }else{
        msg.innerHTML = `Agora são ${hora} horas. Boa noite`
        foto.src = 'img/noite.jpg'
        document.body.style.background = 'black'
    }
} 