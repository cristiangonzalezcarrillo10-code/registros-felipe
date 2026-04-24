function mostrarRegistro() {
  document.getElementById("registro").classList.remove("oculto");
  document.getElementById("registros").classList.add("oculto");
}

function mostrarRegistros() {
  document.getElementById("registro").classList.add("oculto");
  document.getElementById("registros").classList.remove("oculto");
}

document.getElementById("formRegistro").addEventListener("submit", function(e) {
  e.preventDefault();

  const dueno = document.getElementById("dueno").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const animal = document.getElementById("animal").value;
  const tipo = document.getElementById("tipo").value;
  const edad = document.getElementById("edad").value;
  const peso = document.getElementById("peso").value;
  const raza = document.getElementById("raza").value;
  const indoor = document.getElementById("indoor").value;
  const comida = document.getElementById("comida").value;
  const vacunas = document.getElementById("vacunas").checked ? "Sí" : "No";
  const antiparasitario = document.getElementById("antiparasitario").checked ? "Sí" : "No";
  const operaciones = document.getElementById("operaciones").value;
  const alergias = document.getElementById("alergias").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  const tabla = document.getElementById("tablaRegistros");
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${dueno}</td><td>${telefono}</td><td>${correo}</td>
    <td>${animal}</td><td>${tipo}</td><td>${edad}</td><td>${peso}</td>
    <td>${raza}</td><td>${indoor}</td><td>${comida}</td>
    <td>${vacunas}</td><td>${antiparasitario}</td>
    <td>${operaciones}</td><td>${alergias}</td>
    <td>${fecha}</td><td>${hora}</td>
    <td><button onclick="this.parentElement.parentElement.remove()">Eliminar</button></td>
  `;

  tabla.appendChild(fila);
  this.reset();
  mostrarRegistros();
});
