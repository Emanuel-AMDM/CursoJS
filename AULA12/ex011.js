var idade = 70

if(idade < 16){
    console.log(`Menor de idade e não vota, sua idade é ${idade}`)
}else if(idade >= 16 && idade < 18 || idade > 65){
    console.log(`Voto opcional, sua idade é ${idade}`)
}else{
    console.log(`Voto obrigatorio, sua idade é ${idade}`)
}