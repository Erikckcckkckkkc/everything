function soma(){
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const result = n1 + n2;
    document.getElementById("result").textContent = "A soma é: " + result;
}
function subt(){
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const result1 = n1 - n2;
    document.getElementById("result").textContent = "A soma é: " + result1;
}
function mult(){
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const result2 = n1 * n2;
    document.getElementById("result").textContent = "A soma é: " + result2;
}
function divd(){
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const result3 = n1 / n2;
    document.getElementById("result").textContent = "A soma é: " + result3;
}