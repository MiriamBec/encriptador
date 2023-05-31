let texto =
  "Hola mi nombre es miriam, soy estudiante de desarrollo web y estoy tratando de hacer un encriptador";

function encriptarTexto() {
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}

let segundoTexto =
  "Hoberlaimes mimes nobermbrenter enters mimesrimesaimesm, sobery enterstufatdimesaimesntenter denter dentersaimesrroberllober wenterb y enterstobery traimestaimesndober denter haimescenterr ufatn enterncrimesptaimesdoberr";
function desencriptarTexto() {
  segundoTexto = segundoTexto.replace(/ai/g, "a");
  segundoTexto = segundoTexto.replace(/enter/g, "e");
  segundoTexto = segundoTexto.replace(/imes/g, "i");
  segundoTexto = segundoTexto.replace(/ober/g, "o");
  segundoTexto = segundoTexto.replace(/ufat/g, "u");
  return segundoTexto;
}

console.log(encriptarTexto());
console.log(desencriptarTexto());
