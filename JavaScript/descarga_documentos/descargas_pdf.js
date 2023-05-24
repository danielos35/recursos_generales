// La petición debe de estar configurada como typeResponse: blob


const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear();
const blob = new Blob([res]);
const url = window.URL.createObjectURL(blob);
const anchor = document.createElement('a');