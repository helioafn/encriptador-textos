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

function decodificar() {
  let texto = document.getElementById("campo-entrada").value;
  let textoDecodificado = texto;
  textoDecodificado = textoDecodificado.replaceAll(/ai/g, 'a');
  textoDecodificado = textoDecodificado.replaceAll(/enter/g, 'e');
  textoDecodificado = textoDecodificado.replaceAll(/imes/g, 'i');
  textoDecodificado = textoDecodificado.replaceAll(/ober/g, 'o');
  textoDecodificado = textoDecodificado.replaceAll(/ufat/g, 'u');
  exibirTexto(textoDecodificado, "campo-saida");
}

function exibirTexto(texto, idElemento) {
  let campo = document.getElementById(idElemento);
  campo.innerHTML = texto;
}
