function criptografar() {
  let texto = document.getElementById("campo-entrada").value;
  let arrayTexto = texto.split("");
  let textoCodificado = "";

  for (let i = 0; i < arrayTexto.length; i++) {
    const element = arrayTexto[i];
    if (element === "a") {
      arrayTexto[i] += "i";
    } else if (element === "e") {
      arrayTexto[i] += "nter";
    } else if (element === "i") {
      arrayTexto[i] += "mes";
    } else if (element === "o") {
      arrayTexto[i] += "ber";
    } else if (element === "u") {
      arrayTexto[i] += "fat";
    }
  }

  for (const str of arrayTexto) {
    textoCodificado += str;
  }
  exibirTexto(textoCodificado, "campo-saida");
}

function decodificar(textoCodificado) {
  // Lógica para descriptografar aqui
  let arrayTexto = textoCodificado.split("");
  let textoDecodificado = "";
  exibirTexto(textoDecodificado, "campo-saida");
}

function exibirTexto(texto, idElemento) {
  let campo = document.getElementById(idElemento);
  campo.innerHTML = texto;
}
