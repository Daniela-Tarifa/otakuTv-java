const API = 'http://localhost:8080/app/otakutv';
const form = document.getElementById('animeForm');

const tableBody = document.querySelector('#animeTable tbody');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);

  // for (let [key, value] of formData.entries()) {
  //   console.log(key, value);
  // }

  fetch(API, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('agregado:', data);
      form.reset();
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
    });
});

function agregarPelicula(pelicula) {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
      <td>${pelicula.id}</td>
      <td>${pelicula.titulo}</td>
      <td>${pelicula.genero}</td>
      <td><img src="${pelicula.imagen}" alt="Imagen del anime" style="max-width: 120px; height: auto;"></td>
      <td>
          <button type="button" class="btn btn-success m-1" id="${pelicula.id}">Modificar</button>
          <button type="button" class="btn btn-danger m-1" id="${pelicula.id}">Eliminar</button>
      </td>
  `;
  tableBody.appendChild(newRow);
}

fetch(API)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const misAnimes = data;
    misAnimes.forEach(pelicula => {
      agregarPelicula(pelicula);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos de la API:', error);
  });

