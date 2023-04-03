const url = 'https://donatello.to/api/v1/clients';
const token = 'fd4d0163ace81cf144e74f300ea83b3d';

fetch(url, {
  method: 'GET',
  headers: {
    'X-Token': token
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // отображаем полученные данные на странице
    const clientsList = document.getElementById('clients-list');
    data.clients.forEach(client => {
      const clientEl = document.createElement('div');
      clientEl.textContent = `${client.name} (${client.email})`;
      clientsList.appendChild(clientEl);
    });
  })
  .catch(error => {
    console.error('There was a problem with the API request:', error);
  });
