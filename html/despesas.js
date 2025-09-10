let destotal = 0;

function addDES(){
    destotal++;
    const container = document.getElementById('descontainer')

    const div = document.createElement('div');
    div.className = 'campo';

    const label = document.createElement('label');
    label.textContent = `Despesa ${destotal}:`;

    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'des';
    
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remover despesa';
    btnRemove.className = 'remove';
    btnRemove.onclick = () => {
        container.removeChild(div);
        updateNum();
    };

    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(btnRemove);
    container.appendChild(div);
}

function updateNum(){
    const labels = document.querySelectorAll('#descontainer label');
    labels.forEach((label,index) => {
        label.textContent = `Despesa ${index + 1}:`;
    });
}



function calcDES(){
    const sal = parseFloat(document.getElementById("sal").value);
    const des = document.querySelectorAll('.des');
    let desTotal = 0;
    let desValue = [];

    des.forEach(input => {
        const value = parseFloat(input.value);
        desValue.push(value);
        desTotal += value;
    })

    const total = sal - desTotal

    let desPercent = value => (value / sal) * 100;
    desPercent.push((total / sal) * 100);

    if (total < 0){
        let end = document.getElementById("total")
        end.innerHTML = `<p>Seu saldo total é: <mark>R$0.00</mark>.</p>`
    }else{
        let end = document.getElementById("total")
        end.innerHTML = `<p>Seu saldo total é: <mark>R$${total.toFixed(2)}</mark>.</p>`
    }


}