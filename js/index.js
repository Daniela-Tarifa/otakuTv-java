document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('registerButton').style.display = 'none';
    document.getElementById('mainSection').style.display = 'none';
  } else {
    document.getElementById('loginButton').style.display = 'block';
    document.getElementById('logOutButton').style.display = 'none';
    document.getElementById('registerButton').style.display = 'bloc';
    document.getElementById('mainSectionLogged').style.display = 'none';
    document.getElementById('adminButton').style.display = 'none';
  }
});

function logout() {
  var confirmation = confirm("¿Está seguro que desea cerrar sesión?");
  if (confirmation) {
    localStorage.removeItem('isLoggedIn');
    document.getElementById('loginButton').style.display = 'none';
    window.location.href = './login.html';

  }
}

