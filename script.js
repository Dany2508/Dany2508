async function escolher(){
    const personagem = document.getElementById("hero").value;
    const baseurlurl = " https://rickandmortyapi.com/api";
    const final= `${baseurlurl}/character/${personagem}`
    const resposta = await fetch(final);
  
  
    const meuPersonagem = await resposta.json();
  
    const personagemHTML = JSON.stringify(meuPersonagem)
  
    const tudoHTML= `
    <div class = "personagens"
    <h2>Personagem: ${meuPersonagem.name}</h2><br>
    <img src="${meuPersonagem.image}" alt="${meuPersonagem.name}">
    <p>Status: ${meuPersonagem.status}</p>
    <p>Espécie: ${meuPersonagem.species}</p>
    <p>Gênero: ${meuPersonagem.gender}</p>
    <p>Origem: ${meuPersonagem.origin.name}</p>
    <p>Localização: ${meuPersonagem.location.name}</p>
    </div>
  `;
  
  
  console.log(meuPersonagem)
  document.getElementById("respostas").innerHTML = tudoHTML
  
  document.getElementById("hero").value = ""
  document.getElementById("hero").focus 
  }