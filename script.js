// Fecha de inicio de la relación
const fechaInicio = new Date("2026-01-23");
const hoy = new Date();

// Diferencia en días
const diferencia = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));

// Calcular años, meses y días
const años = Math.floor(diferencia / 365);
const meses = Math.floor((diferencia % 365) / 30);
const dias = diferencia - (años * 365) - (meses * 30);

// Mostrar contador completo
document.getElementById("contador").textContent =
  "💖 Hemos estado juntos por " + años + " años, " + meses + " meses y " + dias + " días 💖";

// Aplicar clases según meses especiales
if (meses === 6 && años === 0) document.body.classList.add("mes-6");
if (meses === 7 && años === 0) document.body.classList.add("mes-7");
if (meses === 8 && años === 0) document.body.classList.add("mes-8");
if (meses === 9 && años === 0) document.body.classList.add("mes-9");
if (meses === 10 && años === 0) document.body.classList.add("mes-10");
if (meses === 11 && años === 0) document.body.classList.add("mes-11");

// Aplicar clase dinámica para cada aniversario
if (años >= 1) {
  document.body.classList.add("anio-" + años);
}
