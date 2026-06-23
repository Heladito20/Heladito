// Fecha de inicio de la relación (23 de enero de 2026)
const fechaInicio = new Date("2026-01-23"); 

function actualizarContador() {
  const hoy = new Date();

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

  let mensaje = "";
  if (años > 0) {
    mensaje = `
