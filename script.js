// Fecha de inicio de la relación (23 de enero de 2026)
const fechaInicio = new Date("2026-01-23"); 

function actualizarContador() {
  const hoy = new Date();

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
  let mensaje = "";
  if (años > 0) {
    mensaje = `💖 Hemos estado juntos por ${años} años, ${meses} meses y ${dias} días 💖`;
  } else {
    mensaje = `💖 Hemos estado juntos por ${meses} meses y ${dias} días 💖`;
  }

  document.getElementById("contador").innerHTML = mensaje;

  // 🎉 Efecto especial en aniversarios
  if (dias === 0 && meses > 0 && años === 0) {
    document.body.style.background = "linear-gradient(to bottom, #330033, #660066)";
    lanzarCorazones();
  }
  if (meses === 0 && dias === 0 && años > 0) {
    document.body.style.background = "linear-gradient(to bottom, #000033, #ff0066)";
    lanzarCorazones();
  }
}

// Actualizar al cargar la página
actualizarContador();

// Opcional: actualizar cada día automáticamente
setInterval(actualizarContador, 1000 * 60 * 60 * 24);

// ----------------------
// Modal de imágenes
// ----------------------
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagen-grande");
const captionText = document.getElementById("caption");
const cerrar = document.getElementsByClassName("cerrar")[0];

document.querySelectorAll(".clickable").forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = ""; 
  }
});

cerrar.onclick = function() {
  modal.style.display = "none";
}

// ----------------------
// Efecto de corazones flotando
// ----------------------
function lanzarCorazones() {
  for (let i = 0; i < 20; i++) {
    const corazon = document.createElement("div");
    corazon.innerHTML = "💖";
    corazon.style.position = "fixed";
    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.top = window.innerHeight + "px";
    corazon.style.fontSize = "24px";
    corazon.style.animation = `flotar ${3 + Math.random() * 2}s linear forwards`;
    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 5000);
  }
}
