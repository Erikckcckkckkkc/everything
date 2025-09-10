const cliente = {
    Nome: "Robson",
    Idade: 20,
    CPF: "05086678086",
    Email: "robinho@polo.com.br",
  };

  const cliente2 = {
    Nome: "Alberto",
    Idade: 23,
    CPF: "95473639583",
    Email: "alberto@polo.com.br"
  }

  const cliente3 = {
    Nome: "Beatriz",
    Idade: 28,
    CPF: "05388483258",
    Email: "beatriz@polo.com.br"
  }

  const cliente4 = {
    Nome: "Caroline",
    Idade: 49,
    CPF: "29954738555",
    Email: "caroline@polo.com.br"
  }
 
  const tabela = ["Nome", "Idade", "CPF", "Email"];;
  
  tabela.forEach((tabela) => {
    console.log(`O campo "${tabela}" tem valor "${cliente[tabela]}".`);
  });
  console.log()

  tabela.forEach((tabela) => {
    console.log(`O campo "${tabela}" tem valor "${cliente2[tabela]}".`);
  });
  console.log()

  tabela.forEach((tabela) => {
    console.log(`O campo "${tabela}" tem valor "${cliente3[tabela]}".`);
  });
  console.log()

  tabela.forEach((tabela) => {
    console.log(`O campo "${tabela}" tem valor "${cliente4[tabela]}".`);
  });