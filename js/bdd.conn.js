// const API = 'http://localhost:8080/app/otakutv';
// const form = document.getElementById('animeForm');

// const tableBody = document.querySelector('#animeTable tbody');

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const plainFormData = Object.fromEntries(formData.entries());

//   for (let [key, value] of formData.entries()) {
//     console.log(key, value);
//   }

//   fetch(API, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(plainFormData)
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('agregado:', data);
//       form.reset();
//     })
//     .catch(error => {
//       console.error('Error al enviar los datos:', error);
//     });
// });

// function agregarPelicula(pelicula) {
//   const newRow = document.createElement('tr');
//   newRow.innerHTML = `
//       <td>${pelicula.idAnime}</td>
//       <td>${pelicula.titulo}</td>
//       <td>${pelicula.genero}</td>
//       <td><img src="../assets/img/${pelicula.imagen}.jpg" alt="Imagen del anime" style="max-width: 120px; height: auto;"></td>

//   `;
//   tableBody.appendChild(newRow);
// }

// fetch(API)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     const misAnimes = data;
//     misAnimes.forEach(pelicula => {
//       agregarPelicula(pelicula);
//     });
//   })
//   .catch(error => {
//     console.error('Error al obtener los datos de la API:', error);
//   });

const API = 'http://localhost:8080/app/otakutv';
const form = document.getElementById('animeForm');

function resetErrorMessages() {
  //console.log("voy a limpiar los divs");
  let errorElements = document.querySelectorAll(".otakutv-error-message");
  errorElements.forEach((element) => {
    element.innerText = "";
  });
  //console.log("ya limpie los divs");
}
function displayErrorMessage(elementId, message) {
  let errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("animeForm");
  //console.log(form);
  form.addEventListener("submit", (event) => {
    // Evitar que se envíe el formulario automáticamente
    event.preventDefault();
    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());


    // Resetear los mensajes de error
    resetErrorMessages();

    // Validar los campos
    let titulo = document.getElementById("titulo").value.trim();
    // let fechaEstreno = document.getElementById("fecha").value.trim();
    let genero = document.getElementById("genero").value.trim();
    let duracion = document.getElementById("duracion").value.trim();
    let director = document.getElementById("director").value.trim();
    let reparto = document.getElementById("reparto").value.trim();
    let sinopsis = document.getElementById("sinopsis").value.trim();
    let imagen = document.getElementById("imagen").value.trim();

    let isValid = true;

    if (titulo === "") {
      displayErrorMessage("tituloError", "Por favor ingrese un título.");
      isValid = false;
    }

    // if (fechaEstreno === "") {
    //   displayErrorMessage("fechaError", "Por favor selecione la fecha de estreno.");
    //   isValid = false;
    // }

    if (genero === "") {
      displayErrorMessage("generoError", "Por favor ingrese un genero.");
      isValid = false;
    }

    if (duracion === "") {
      displayErrorMessage("duracionError", "Por favor ingrese la duración.");
      isValid = false;
    }

    if (director === "") {
      displayErrorMessage("directorError", "Por favor ingrese el director.");
      isValid = false;
    }

    if (reparto === "") {
      displayErrorMessage("repartoError", "Por favor ingrese el reparto.");
      isValid = false;
    }

    if (sinopsis === "") {
      displayErrorMessage("sinopsisError", "Por favor ingrese la sinopsis.");
      isValid = false;
    }

    if (imagen === "") {
      displayErrorMessage("imagenError", "Por favor ingrese una imagen.");
      isValid = false;
    }



    if (isValid) {
      // se envia el formulario si todos los campos son válidos
      alert("¡Formulario enviado correctamente!");
      fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(plainFormData)
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

    }
  });
});

const tableBody = document.querySelector('#animeTable tbody');

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const formData = new FormData(form);

// for (let [key, value] of formData.entries()) {
//   console.log(key, value);
// }

// fetch(API, {
//   method: 'POST',
//   body: formData,
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('agregado:', data);
//     form.reset();
//   })
//   .catch(error => {
//     console.error('Error al enviar los datos:', error);
//   });
// });

function agregarPelicula(pelicula) {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
      <td>${pelicula.idAnime}</td>
      <td>${pelicula.titulo}</td>
      <td>${pelicula.genero}</td>
      <td><img src="../assets/img/${pelicula.imagen}.jpg" alt="Imagen del anime" style="max-width: 120px; height: auto;"></td>
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