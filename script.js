let texto;
let buttonEncriptar = document.querySelector("#button-encriptar");
let buttonDesencriptar = document.querySelector(".button-desencriptar");
let mensaje = document.querySelector(".mensaje-no-encontrado");
let mensaje2 = document.querySelector(".mensaje2");
let copiarButton = document.getElementById("copiar");
function encriptarTexto() {
  texto = document.getElementById("myTextarea").value;
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  mensaje.style.fontWeight = "normal";
  mensaje2.style.display = "none";
  copiarButton.style.display = "block";
  return (mensaje.innerHTML = texto);
}

function desencriptarTexto() {
  texto = document.getElementById("myTextarea").value;
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  mensaje.style.fontWeight = "normal";
  mensaje2.style.display = "none";
  copiarButton.style.display = "block";
  return (mensaje.innerHTML = texto);
}

buttonEncriptar.onclick = encriptarTexto;
buttonDesencriptar.onclick = desencriptarTexto;
// console.log(encriptarTexto());
// console.log(desencriptarTexto());
