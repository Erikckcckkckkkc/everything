var idade = 67 //cria uma var 'idade' com o valor de 67
console.log(`Você tem ${idade} anos.`) //mostra o valor da var
if (idade < 16) {//cria uma if, que checa se a idade é menor do que 16
    console.log("Não vota.")//se for menor que 16, não vota
} else if (idade < 18 || idade > 65) {//checa se for entre 16 e 18, ou maior de 65
        console.log("Voto opcional.")//se sim, o voto é opcional
    } else {//se não,--
        console.log("Voto obrigatório.")//o voto é obrigatório
    }