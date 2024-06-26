document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    document.getElementById('loginButton').style.display = 'block';
    document.getElementById('logOutButton').style.display = 'none';
  } else {
    document.getElementById('loginButton').style.display = 'none';
  }
});

function logout() {
  var confirmation = confirm("¿Está seguro que desea cerrar sesión?");
  if (confirmation) {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'pages/login.html';
  }
}