var agora = new Date
var semana = agora.getDay()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()
console.log(`A data de hoje é ${dia}/${mes+1}/${ano}.`)
switch(semana){
    case 0:
        console.log('Hoje é domingo.')
        break;
    case 1:
        console.log('Hoje é segunda-feira.')
        break
    case 2:
        console.log('Hoje é terça-feira.')
        break
    case 3:
        console.log('Hoje é quarta-feira.')
        break
    case 4:
        console.log('Hoje é quinta-feira.')
        break
    case 5:
        console.log('Hoje é sexta-feira.')
        break
    case 6:
        console.log('Hoje é sábado.')
        break
}
