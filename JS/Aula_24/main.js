document.addEventListener('DOMContentLoaded', () => {
  const clanSelect = document.getElementById('clanSelect');
  const ninjaSelect = document.getElementById('ninjaSelect');
  const ninjaDetails = document.getElementById('ninjaDetails');

  // Função para preencher o combo de clãs
  async function fetchClans() {
    const response = await fetch('https://dattebayoapi.onrender.com/clans');
    const clans = await response.json();
    clans.forEach(clan => {
      const option = document.createElement('option');
      option.value = clan.id;
      option.textContent = clan.name;
      clanSelect.appendChild(option);
    });
  }

  // Função para preencher o combo de ninjas baseado no clã selecionado
  async function fetchNinjas(clanId) {
    const response = await fetch(`https://dattebayoapi.onrender.com/characters/ids?clan=${clanId}`);
    const ninjas = await response.json();
    ninjaSelect.innerHTML = '<option value="">Selecione um ninja</option>'; // Limpa os ninjas anteriores
    ninjas.forEach(ninja => {
      const option = document.createElement('option');
      option.value = ninja.id;
      option.textContent = ninja.name;
      ninjaSelect.appendChild(option);
    });
  }

  // Função para exibir os detalhes do ninja selecionado
  async function fetchNinjaDetails(ninjaId) {
    const response = await fetch(`https://dattebayoapi.onrender.com/characters/${ninjaId}`);
    const ninja = await response.json();
    ninjaDetails.innerHTML = `
      <h3>${ninja.name}</h3>
      <img src="${ninja.image}" alt="${ninja.name}" />
      <p>ID: ${ninja.id}</p>
      <p>Data de Nascimento: ${ninja.birthday}</p>
      <p>Sexo: ${ninja.sex}</p>
      <p>Tipo Sanguíneo: ${ninja.bloodType}</p>
    `;
  }

  // Eventos para carregar os ninjas e exibir detalhes
  clanSelect.addEventListener('change', (event) => {
    const clanId = event.target.value;
    if (clanId) {
      fetchNinjas(clanId);
    } else {
      ninjaSelect.innerHTML = '<option value="">Selecione um ninja</option>';
      ninjaDetails.innerHTML = '';
    }
  });

  ninjaSelect.addEventListener('change', (event) => {
    const ninjaId = event.target.value;
    if (ninjaId) {
      fetchNinjaDetails(ninjaId);
    } else {
      ninjaDetails.innerHTML = '';
    }
  });

  // Inicializa a página carregando os clãs
  fetchClans();
});
