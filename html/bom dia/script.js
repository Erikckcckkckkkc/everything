function bomDia(){
    document.title = "Bom dia!";
    document.getElementById("imagem").src = "images/manhã.png";
    document.getElementById("texto").innerText = "Bom dia!";
    document.body.style.backgroundImage = "url(images/manhãfundo.png)";
}

function boaTarde(){
    document.title = "Boa tarde!";
    document.getElementById("imagem").src = "images/tarde.png";
    document.getElementById("texto").innerText = "Boa tarde!";
    document.body.style.backgroundImage = "url(images/tardesky.png)"
}

function boaNoite(){
    document.title = "Boa noite!";
    document.getElementById("imagem").src = "images/noite.png";
    document.getElementById("texto").innerText = "Boa noite!";
    document.body.style.backgroundImage = "url(images/noitesky.png)"
}

var messageElement = document.getElementById("message");
var circleElement = document.getElementById("circle");

const refreshStatus = () => {
  let today = new Date();
  let currentTime = today.getHours(); //get hours

  if (currentTime < 12 & currentTime > 5) {
    bomDia()
  } else
  if (currentTime < 18) {
    boaTarde()
  } else {
    boaNoite()
  }
}

// run when starting
refreshStatus();

// updates every 8 seconds
setInterval(refreshStatus, 8000);