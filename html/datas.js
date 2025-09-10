var agora = new Date
var horas = agora.getHours()
var minutos = agora.getMinutes()
if(horas < 12){
    console.log(`Agora são ${horas}:${minutos} da manhã. Bom dia!`)
}
else if(horas < 18){
    console.log(`Agora são ${horas-12}:${minutos} da tarde. Boa tarde!`)
}
else{
    console.log(`Agora são ${horas-12}:${minutos} da tarde. Boa noite!`)
}