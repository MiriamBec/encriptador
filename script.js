let texto;
let buttonEncriptar = document.querySelector("#button-encriptar");
let buttonDesencriptar = document.querySelector(".button-desencriptar");
let imgMuneco = document.querySelector(".muneco");
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
  imgMuneco.style.display = "none";
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
  imgMuneco.style.display = "none";
  mensaje.style.fontWeight = "normal";
  mensaje2.style.display = "none";
  copiarButton.style.display = "block";
  return (mensaje.innerHTML = texto);
}

function copiarTexto() {
  let contenido = mensaje.innerText;

  navigator.clipboard
    .writeText(contenido)
    .then(function () {
      console.log("Contenido copiado al portapapeles");
    })
    .catch(function (error) {
      console.error("Error al copiar el contenido: ", error);
    });
}

buttonEncriptar.onclick = encriptarTexto;
buttonDesencriptar.onclick = desencriptarTexto;
copiarButton.onclick = copiarTexto;
