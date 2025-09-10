function contar() {
    var startNumber  = document.getElementById("start")// sets variable startNumber as the HTML's start nunmber
    var endNumber = document.getElementById("end")// sets variable endNumber as the HTML's start number
    var stepNumber = document.getElementById("step")// sets variable stepNumber as the HTML's step number
    var result = document.getElementById("result")// sets variable result as the place where the HTMl will display the result

    if (startNumber.value.length == 0 || endNumber.value.length == 0 || stepNumber.value.length == 0) {// checks if any of the numbers are 0
        result.innerHTML = "Impossível contar!"// if any number is 0, counting is impossible
    } else {// if no numbers are 0, 
        result.innerHTML = "Contando: <br>"// starts counting
        result.innerHTML += "🏠 "// hiouse
        let i = Number(startNumber.value)// defines i as the start number
        let f = Number(endNumber.value)// defines f as the end number
        let p = Number(stepNumber.value)// defines p as the step number

        if (p <= 0) {// checks if the step number is equal or below zero
            window.alert("Passo inválido. Passo não pode ser igual ou menor a 0.")// if so, counting is impossible
            p = 1// sets steps to 1
        }
        if (i < f) {// checks if start number is lower than end number
            // Contagem crescente
            for (let c = i; c<= f; c+=p) {// defines c as the start number, checks if it is below the end number and if not, adds the step value to it
            result.innerHTML += `${c} ✌🏻 `// displays an ✌🏻 emoji after every number
            }
        } else {// if the start number is not lower than end number
            // Contagem regressiva
            for (c = i; c>=f; c-=p)// defines c as the start number, checks if it is above the end number and if not, removes the step value from it
            result.innerHTML += `${c}  ✌🏻 `// displays an ✌🏻 emoji after every number
        }
    result.innerHTML += `🏁`//end
    }
}//it was easier to write this in english