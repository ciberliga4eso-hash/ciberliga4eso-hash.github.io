
var form = document.getElementById('loginForm');


form.addEventListener('submit', function(e) {
    

    e.preventDefault();

   
    var usuario = document.getElementById('username').value;
    var clave = document.getElementById('password').value;

   
    if (usuario === "Anonim123" && clave === "SECRETIT") {
        window.location.href = "base_de_datos.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }

});

