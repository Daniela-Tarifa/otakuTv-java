/********************de un array***********************/
// Array de películas
/*
const animesObjetos = [
    {titulo: 'One Punch-man', imagen :'one-punch-man.jpg'}, 
    {titulo: 'Naruto', imagen :'naruto.jpg'},
    {titulo: 'Oshi no ko', imagen : 'Oshi-no-ko.jpg'},
    {titulo: 'Sailor Moon', imagen:'sailor-moon.jpg'},
    {titulo: 'One Piece', imagen:'one-piece.jpg'},
    {titulo: 'Boku no Hero', imagen:'boku-no-hero.jpg'},
    {titulo: 'Detective Conan', imagen:'detective-conan.jpg'},
    {titulo: 'Dragon Ball', imagen:'dragon-ball-z.jpg'},
    {titulo: 'Jojo Bizarre Adventure', imagen:'jojo-bizarre-adventure.jpg'},
    {titulo: 'Jujutsu-no Kaisen', imagen:'jujutsu-no-kaisen.jpg'},
    {titulo: 'Madoka Magica', imagen:'madoka-magica.jpg'},
    {titulo: 'Mirai Nikki', imagen:'mirai-nikki.jpg'},
    {titulo: 'Mob Psycho 100', imagen:'mob-psycho-100.jpg'},
    {titulo: 'Hunter-x Hunter', imagen:'hunter-x-hunter.jpg'}
];

// Obtener la sección de películas del DOM
const animesSection = document.getElementById('animesSection');
const cargarAnimes = document.getElementById('animesButton');

console.log(animesSection);

// Función para crear una tarjeta (card) del anime
function crearTarjetaAnime(anime) {
    // Crear elementos de la tarjeta del anime
    // estamos creando la tarjeta
    const link= document.createElement('a');
    link.classList.add('col');
    link.href = "../pages/detalle.html";

    const card = document.createElement('div');
    card.classList.add('card', 'h-90', 'otakutv-bg-azul', 'position-relative', 'otakutv-index-card', 'overflow-hidden');
    
    // creo la imagen de la tarjeta
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top', 'rounded');

    cardImg.src = `../assets/img/${anime.imagen}`;
    cardImg.alt = anime.titulo;

    // creamos el cuerpo del texto de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.classList.add('text-center');

    // creamos el texto de la tarjeta
    const cardTitle = document.createElement('p');
    cardTitle.classList.add('position-absolute', 'top-50', 'start-50', 'translate-middle', 'w-100', 'h-100');
    cardTitle.textContent = anime.titulo;


    // Añadir elementos a la tarjeta del anime
    cardBody.appendChild(cardTitle);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    link.appendChild(card);

    return link;
}

// Función para agregar todas las tarjetas de animes al DOM
function agregarTarjetasAnimes() {
    animesObjetos.forEach(function(anime) {
        const animeCard = crearTarjetaAnime(anime); // crea la columna con la tarjeta dentro
        animesSection.appendChild(animeCard);
    });
}

// Llamar a la función para agregar las tarjetas de animes cuando el DOM esté cargado
// document.addEventListener("DOMContentLoaded", agregarTarjetasAnimes);
// agregarTarjetasAnimes();
    cargarAnimes.addEventListener('click', agregarTarjetasAnimes);
*/


/********************de un api***********************/
// Función para crear una tarjeta (card) del anime
function crearTarjetaAnime(anime) {
    // Crear elementos de la tarjeta del anime
    // estamos creando la tarjeta
    const link= document.createElement('a');
    link.classList.add('col');
    link.href = "../pages/detalle.html";

    const card = document.createElement('div');
    card.classList.add('card', 'h-90', 'otakutv-bg-azul', 'position-relative', 'otakutv-index-card', 'overflow-hidden');
    
    // creo la imagen de la tarjeta
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top', 'rounded', 'otakutv-ajustar-tamaño-card-img');

    cardImg.src = anime.images.jpg.image_url;
    cardImg.alt = anime.title;

    // creamos el cuerpo del texto de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.classList.add('text-center');

    // creamos el texto de la tarjeta
    const cardTitle = document.createElement('p');
    cardTitle.classList.add('position-absolute', 'top-50', 'start-50', 'translate-middle', 'w-100', 'h-100');
    cardTitle.textContent = anime.title;


    // Añadir elementos a la tarjeta del anime
    cardBody.appendChild(cardTitle);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    link.appendChild(card);

    return link;
}

// datos de la api
const API_SERVER = 'https://api.jikan.moe/v4/top/anime';


// Función para cargar películas en la seccion del index
const cargarAnimes = async () => {
    try{
        // Realizamos una petición fetch a la API para obtener las películas populares
        const response = await fetch(API_SERVER);
        console.log(response);
        const data = await response.json();
	    console.log(data);
        const animesList=  data.data;
        const animesSection = document.getElementById('animesSection');
        animesSection.innerHTML = '';// Limpiamos el contenido previo del contenedor
        animesList.forEach(anime => {
            const animeCard = crearTarjetaAnime(anime);
            animesSection.appendChild(animeCard);
        });
    }catch(error){
        console.error(error);
    }
 

};


document.getElementById('animesButton').addEventListener('click', cargarAnimes);

