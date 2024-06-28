function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".otakutv-error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    });
}
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}
function isValidEmail(email) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // estructura texto@texto.texto

    return emailPattern.test(email);
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    console.log(form);
    form.addEventListener("submit", (event) => {
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        // Resetear los mensajes de error
        resetErrorMessages();

        // Validar los campos
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let nacimiento = document.getElementById("nacimiento").value.trim();
        let pais = document.forms["loginForm"]["pais"].selectedIndex;
        let termino = document.forms["loginForm"]["termino"];
        let isValid = true;

        if (nombre === "") {
            displayErrorMessage("nombreError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (apellido === "") {
            displayErrorMessage("apellidoError", "Por favor ingrese un apellido.");
            isValid = false;
        }

        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (nacimiento === "") {
            displayErrorMessage("nacimientoError", "Por favor selecione la fecha.");
            isValid = false;
        }

        if (pais == null || pais == 0) {
            displayErrorMessage("paisError", "Por favor selecione un país.");
            isValid = false;
        }

        if (!termino.checked) {
            displayErrorMessage("terminoError", "Por favor acepté los terminos y condiciones.");
            isValid = false;
        }

        /*
        if (termino.checked) {
            displayErrorMessage("terminoError", "Acepte los terminos y condiciones.");
            isValid = false;
        }
        */

        if (isValid) {
            // se envia el formulario si todos los campos son válidos
            alert("¡Formulario enviado correctamente!");
            // Por ejemplo:
            // document.getElementById("loginForm").submit();
        }
    });
});