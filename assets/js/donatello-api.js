const url = 'https://donatello.to/api/v1/clients';
const token = '5d2ef4301d0507022f45f8229fd54dd2';

fetch(url, {
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
  data.forEach(client => {
    const clientEl = document.createElement('div');
    clientEl.textContent = `${client.name} (${client.email})`;
    clientsList.appendChild(clientEl);
  });
})
.catch(error => {
  console.error('There was a problem with the API request:', error);
});
