var mostrar = document.getElementById("navLinks");
var cerrar = document.getElementById("modal-contenido");
var nl = document.getElementById('sbs');

function Show() {
    document.querySelector('.modal').style.display = 'flex';
}

function Close() {
    document.querySelector('.modal').style.display = 'none';
}

function mostrarMenu() {
    mostrar.style.right = "0";
}

function cerrarMenu() {
    mostrar.style.right = "-200px";
}