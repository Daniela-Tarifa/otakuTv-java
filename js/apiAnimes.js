document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    let botonAnterior = document.getElementById('prevPage');
    botonAnterior.classList.add('disabled');
    botonAnterior.disabled = true;
    const cargarAnimes = async (page) => {
        const API_SERVER = `https://api.jikan.moe/v4/top/anime?page=${page}`;
        try {
            const response = await fetch(API_SERVER);
            const data = await response.json();
            crearTarjetaAnime(data.data)
        } catch (error) {
            console.error(error);
        }
    };
    function crearTarjetaAnime(animes) {
        const animeList = document.getElementById('animesSection')
        animeList.innerHTML = ''

        animes.forEach(anime => {
            const animeCard = document.createElement('a');
            animeCard.className = 'col'
            animeCard.href = '../pages/detalle.html'
            animeCard.innerHTML =
                `<div class="card h-90 otakutv-bg-azul position-relative otakutv-index-card overflow-hidden">
                    <img src="${anime.images.jpg.image_url}" class="card-img-top rounded otakutv-ajustar-tamaño-card-img"
                        alt="${anime.title}">
                    <div class="text-center">
                        <p class="position-absolute top-50 start-50 translate-middle w-100 h-100">
                            ${anime.title}
                        </p>
                    </div>
                </div>
            `;
            animeList.appendChild(animeCard)
        });
    }

    document.getElementById('nextPage').addEventListener('click', () => {
        currentPage++
        cargarAnimes(currentPage)
        botonesActivos()
    })
    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--
            cargarAnimes(currentPage)
            botonesActivos()
        }
    })
    function botonesActivos() {
        if (currentPage === 1) {
            botonAnterior.classList.add('disabled')
            botonAnterior.disabled = true
        } else {
            botonAnterior.classList.remove('disabled')
            botonAnterior.disabled = false
        }
    }
    cargarAnimes(currentPage)
})


