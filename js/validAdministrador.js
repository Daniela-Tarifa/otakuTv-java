function resetErrorMessages() {
    //console.log("voy a limpiar los divs");
    let errorElements = document.querySelectorAll(".otakutv-error-message");
    errorElements.forEach((element)=> {
        element.innerText = "";
    });
    //console.log("ya limpie los divs");
}
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}


document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("animeForm");
    //console.log(form);
    form.addEventListener("submit", (event)=>{
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        // Resetear los mensajes de error
        resetErrorMessages();

        // Validar los campos
        let titulo = document.getElementById("titulo").value.trim();
        let fechaEstreno = document.getElementById("fecha").value.trim();
        let genero = document.getElementById("genero").value.trim();
        let duracion = document.getElementById("duracion").value.trim();
        let director = document.getElementById("director").value.trim();
        let reparto = document.getElementById("reparto").value.trim();
        let sinopsis = document.getElementById("sinopsis").value.trim();
        let imagen = document.getElementById("imagen").value.trim();

        let isValid = true;

        if (titulo === "") {
            displayErrorMessage("tituloError", "Por favor ingresé un título.");
            isValid = false;
        }

        if (fechaEstreno === "") {
            displayErrorMessage("fechaError", "Por favor selecioné la fecha de estreno.");
            isValid = false;
        }

        if (genero === "") {
            displayErrorMessage("generoError", "Por favor ingresé un género.");
            isValid = false;
        }

        if (duracion === "") {
            displayErrorMessage("duracionError", "Por favor ingresé la duración.");
            isValid = false;
        }

        if (director === "") {
            displayErrorMessage("directorError", "Por favor ingresé el director.");
            isValid = false;
        }

        if (reparto === "") {
            displayErrorMessage("repartoError", "Por favor ingresé el reparto.");
            isValid = false;
        }

        if (sinopsis === "") {
            displayErrorMessage("sinopsisError", "Por favor ingresé la sinopsis.");
            isValid = false;
        }

        if (imagen === "") {
            displayErrorMessage("imagenError", "Por favor ingresé una imagen.");
            isValid = false;
        }

        
        
        if (isValid) {
            // se envia el formulario si todos los campos son válidos
            alert("¡Formulario enviado correctamente!");
            
        }
    });
} );