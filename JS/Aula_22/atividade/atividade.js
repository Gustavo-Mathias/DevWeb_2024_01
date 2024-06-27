document.addEventListener('DOMContentLoaded', function () {
  const clansSelect = document.getElementById('clans');
  const charactersSelect = document.getElementById('characters');
  const button = document.getElementById('button');
  const apiBase = "https://dattebayoapi.onrender.com";
  const outros = document.getElementById("outros");
  const title_card = document.getElementById("title_card");
  const imagem_aqui = document.getElementById("imagem_aqui");

  
  fetch(`${apiBase}/clans`)
    .then(response => response.json())
    .then(data => {
      data.forEach(clan => {
        const option = document.createElement('option');
        option.value = clan.id;
        option.textContent = clan.name;
        clansSelect.appendChild(option);
      });
    })
    .catch(error => console.error('Erro ao buscar clãs:', error));


  clansSelect.addEventListener('change', function () {
    const clanId = this.value;
    charactersSelect.innerHTML = '<option value="">Selecione Personagem</option>'; 
    charactersSelect.style.display = "none";
    button.disabled = true;

    if (clanId) {
      fetch(`${apiBase}/characters/ids?clan_id=${clanId}`)
        .then(response => response.json())
        .then(data => {
          data.forEach(character => {
            const option = document.createElement('option');
            option.value = character.id;
            option.textContent = character.name;
            charactersSelect.appendChild(option);
          });
          charactersSelect.style.display = "inline";
          document.getElementById('label').style.display = "inline";  
          button.disabled = false;
        })
        .catch(error => console.error('Erro ao buscar personagens:', error));
    }
  });


  const getData = () => {
    cleanData();
    const characterId = charactersSelect.value;

    if (characterId) {
      fetch(`${apiBase}/characters/${characterId}`)
        .then(response => response.json())
        .then(character => {
          document.getElementById("id").innerText = character.id;
          document.getElementById("name").innerText = character.name;
          document.getElementById("birthday").innerText = character.birthday;
          document.getElementById("sex").innerText = character.sex;
          document.getElementById("bloodType").innerText = character.bloodType;
          imagem_aqui.innerHTML = `<img class="rounded img-fluid" src="${character.image}" alt="${character.name}" />`;
          outros.innerHTML = `<p><b>Descrição</b>: ${character.description} </p>`;
        })
        .catch(error => console.error('Erro ao buscar detalhes do personagem:', error));
    }
  };

  const cleanData = () => {
    document.getElementById("id").innerText = "";
    document.getElementById("name").innerText = "";
    document.getElementById("birthday").innerText = "";
    document.getElementById("sex").innerText = "";
    document.getElementById("bloodType").innerText = "";
    imagem_aqui.innerHTML = "";
    outros.innerHTML = "";
  };

  button.addEventListener('click', getData);
});