function processar(){
    //pega ano atual
    var data = new Date()
    anoatual = data.getFullYear()

    //variaveis dos campos
    var txt = document.querySelector('label#txt')
    var ano = document.querySelector('input#ano')

    //condição------------------quando a variavel for de campo html sempre colocar value
    if(ano.value == 0 || ano.value > anoatual){//checa se campo vazio ou ano maior que atual
        alert(`[ERROR] DIGITE UM ANO VALIDO`)
    }else{
        //variavel
        var sexo = document.getElementsByName('sexo')

        //calculo idade
        var idade = anoatual - Number(ano.value)
        //variavel genero vazia
        var genero = ''
        var img = document.querySelector('img#img')
        
        //condição para checar o campo sexo na primeira posição se foi marcado
        //se foi marcado é homem
        /*primeiro checando se masc ou fem foi selecionado, atribui o genero pois a variavel esta vazia
        depois so fazer um if com as consições dentro do if para checar a idade*/
        if(sexo[0].checked){
            genero = 'Masculino'
            
            if(idade < 2){
                txt.innerHTML = `Sua idade é de ${idade}, por isso você é um <strong>bebe</strong> do genero ${genero}`
                img.src = 'img/bebe.jpg'
            }else if(idade >= 2 && idade <= 18){
                txt.innerHTML = `Sua idade é de ${idade}, por isso você é uma <strong>criança</strong> do genero ${genero}`
                img.src = 'img/menino.jpg'
            } else if(idade > 18 && idade <=50){
                txt.innerHTML = `Sua idade é de ${idade}, por isso você é uma <strong>Homem</strong> do genero ${genero}`
                img.src = 'img/homem.jpg'
            } else if(idade > 50){
                txt.innerHTML = `Sua idade é de ${idade}, por isso você é uma <strong>Idoso</strong> do genero ${genero}`
                img.src = 'img/idoso.jpg'
            }
        //condição para checar o campo sexo na segunda posição se foi marcado
        //se foi marcado é mulher
        }else if(sexo[1].checked){
            genero = 'Feminino'

            if(idade < 2){
                txt.innerHTML = `Sua idade é de ${idade}, por isso você é um <strong>bebe</strong> do genero ${genero}`
                img.src = 'img/bebe.jpg'
            }else if(idade >= 2 && idade <= 18){
                txt.innerHTML = `Sua idade é de ${idade}, por isso você é uma <strong>criança</strong> do genero ${genero}`
                img.src = 'img/menina.jpg'
            }else if(idade > 18 && idade <=50){
                txt.innerHTML = `Sua idade é de ${idade}, por isso você é uma <strong>mulher</strong> do genero ${genero}`
                img.src = 'img/mulher.jpg'
            }else if(idade > 50){
                txt.innerHTML = `Sua idade é de ${idade}, por isso você é uma <strong>idosa</strong> do genero ${genero}`
                img.src = 'img/idosa.jpg'
            }
        }
    }
}