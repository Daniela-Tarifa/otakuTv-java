function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".otakutv-error-message");
    errorElements.forEach((element)=> {
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


document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("loginForm");
    console.log(form);
    form.addEventListener("submit", (event)=>{
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        // Resetear los mensajes de error
        resetErrorMessages();

        // Validar los campos
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValid = true;


        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
            document.getElementById("email").classList.add("is-invalid");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (isValid) {
            // se envia el formulario si todos los campos son válidos
            localStorage.setItem('isLoggedIn', 'true');
            alert("¡Formulario enviado correctamente!");
            window.location.href = '../index.html';
            // Por ejemplo:
            // document.getElementById("loginForm").submit();
        }
    });
} );