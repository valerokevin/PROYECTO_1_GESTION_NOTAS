const aprendices = [
  { nombre: "Sergio", nota: 4.7, programa: "ADSO" },
  { nombre: "Camilo", nota: 2.3, programa: "ADSO" },
  { nombre: "Kevin", nota: 3.4, programa: "Diseno Web" },
  { nombre: "Dilan", nota: 2.5, programa: "ADSO" },
  { nombre: "Silvana", nota: 4.0, programa: "Diseno Web" },
  { nombre: "David", nota: 3.6, programa: "Diseno Web" },
  { nombre: "Julian", nota: 3.9, programa: "ADSO" },
  { nombre: "Valentina", nota: 5.0, programa: "Diseno Web" }
];

const resultado = document.getElementById("resultado");

// Mostrar en pantalla
function pintar(lista) {
  resultado.innerHTML = "";
  lista.forEach(apr => {
    resultado.innerHTML += `<p>${apr.nombre} - ${apr.nota} - ${apr.programa}</p>`;
  });
}

// 1
function mostrarAprendices() {
  pintar(aprendices);
}

// 2
function mostrarAprobados() {
  pintar(aprendices.filter(a => a.nota >= 3));
}

// 3
function mostrarReprobados() {
  pintar(aprendices.filter(a => a.nota < 3));
}

// 4
function mostrarMayusculas() {
  const nombres = aprendices.map(a => a.nombre.toUpperCase());
  resultado.innerHTML = nombres.map(n => `<p>${n}</p>`).join("");
}

// 5
function mostrarPromedios() {
  const prom = arr => arr.reduce((acc, a) => acc + a.nota, 0) / arr.length;

  const ADSO = aprendices.filter(a => a.programa === "ADSO");
  const DW = aprendices.filter(a => a.programa === "Diseno Web");

  resultado.innerHTML = `
    <p>Promedio ADSO: ${prom(ADSO).toFixed(2)}</p>
    <p>Promedio Diseño Web: ${prom(DW).toFixed(2)}</p>
  `;
}

// 6
function ordenarNotas() {
  pintar([...aprendices].sort((a, b) => b.nota - a.nota));
}

// 7
function mostrarDesempeno() {
  resultado.innerHTML = "";

  aprendices.forEach(a => {
    let nivel;

    switch (true) {
      case a.nota >= 4.5: nivel = "Superior"; break;
      case a.nota >= 4: nivel = "Alto"; break;
      case a.nota >= 3: nivel = "Básico"; break;
      default: nivel = "Bajo";
    }

    resultado.innerHTML += `<p>${a.nombre}: ${nivel}</p>`;
  });
}