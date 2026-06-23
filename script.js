// Fecha de inicio de la relación (ajústala una sola vez)
// Ejemplo: 2026-01-24 si fue el 24 de enero
const fechaInicio = new Date("2026-01-24"); 

function actualizarContador() {
  const hoy = new Date();

  // Diferencia en milisegundos
  const diferencia = hoy - fechaInicio;

  // Convertir a días totales
  const diasTotales = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  // Calcular años, meses y días
  let años = hoy.getFullYear() - fechaInicio.getFullYear();
  let meses = hoy.getMonth() - fechaInicio.getMonth();
  let dias = hoy.getDate() - fechaInicio.getDate();

  if (dias < 0) {
    meses -= 1;
    const mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
    dias += mesAnterior;
  }

  if (meses < 0) {
    años -= 1;
    meses += 12;
  }

  // Mostrar resultado en el contador
  document.getElementById("contador").innerHTML =
    `💖 Hemos estado juntos por ${años} años, ${meses} meses y ${dias} días 💖`;

  // 🎉 Efecto especial en aniversarios
  if (dias === 0 && meses > 0) {
    // Cada mes cumplido
    document.body.style.background = "linear-gradient(to bottom, #330033, #660066)";
  }
  if (meses === 0 && dias === 0 && años > 0) {
    // Cada año cumplido
    document.body.style.background = "linear-gradient(to bottom, #000033, #ff0066)";
  }
}

// Actualizar al cargar la página
actualizarContador();

// Opcional: actualizar cada día automáticamente
setInterval(actualizarContador, 1000 * 60 * 60 * 24);

