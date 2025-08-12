

const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigo = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    ulListaAmigo.innerHTML += `<li>${nombre}</li>`;
    inputAmigo.value = ""; // limpiar input
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        ulResultado.innerHTML = "<li>No hay amigos en la lista para sortear</li>";
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}