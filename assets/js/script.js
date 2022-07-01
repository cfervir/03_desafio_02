// Ejercicio 01 - Borde Rojo
const getPato = document.getElementById('getPato');
getPato.addEventListener('click', addBorder);

function addBorder() {

  if (getPato.style.border === '') {
      getPato.style.border = 'solid red 2px';
  } else {
      getPato.style.border = '';
  }
}

// Ejercicio 02 - Suma de Stickers
const getStickers = document.getElementById('getStickers');
getStickers.addEventListener('click', sumatoriaStickers);

function sumatoriaStickers() {

  let stickerPrimero = parseInt(document.getElementById('stickerPrimero').value);
  let stickerSegundo = parseInt(document.getElementById('stickerSegundo').value);
  let stickerTercero = parseInt(document.getElementById('stickerTercero').value);

  let stickersTotal = stickerPrimero + stickerSegundo + stickerTercero;

  if (stickersTotal < 0) {
    document.getElementById("resultSticker").textContent = `¡Esa cantidad no es válida!`;
  } else if (stickersTotal === 0) {
    document.getElementById("resultSticker").textContent = `¡Debes agregar stickers!`;
  } else if (stickersTotal <= 10) {
    document.getElementById("resultSticker").textContent = `Llevas en total ${stickersTotal}`;
  } else {
    document.getElementById("resultSticker").textContent = `¿No crees que ${stickersTotal} son demasiados stickers?`;
  }
}

// Ejercicio 03 - Contraseña
const getValor = document.getElementById('getValor');
getValor.addEventListener('click', revisarPassword);

function revisarPassword() {
  let valorA = parseInt(document.getElementById('valorA').value);
  let valorB = parseInt(document.getElementById('valorB').value);
  let valorC = parseInt(document.getElementById('valorC').value);

  if (valorA === 9 && valorB === 1 && valorC === 1) {
    document.getElementById("resultValor").textContent = `Password 1 correcto.`;
  } else if (valorA === 7 && valorB === 1 && valorC === 4) {
    document.getElementById("resultValor").textContent = `Password 2 es correcto.`;
  } else {
    document.getElementById("resultValor").textContent = `Lo lamento, password incorrecto.`;
  }
}