function corFundo() {
  var cor = prompt("digite a cor preta para aplicar ao fundo");

  /*
  tranformar os caracteres em mauiscula usamos o camando toUpeerCase
  para minuscula usamos o comando toLowerCase
 */
  cor = cor.toLowerCase();
  if (cor == "preto") {
    document.bgColor = "000000";
  }
}
function corFundo2() {
  var cor = prompt("digite a cor preto ou vermmelho para o fundo");
  cor = cor.toLowerCase();
  if (cor == "preto") {
    document.bgColor = "black";
  } else if (cor == "vermelho") {
    document.bgColor = "red";
  } else document.bgColor = "yellow";
}

function mudarCor() {
  if (document.forms[0].cor[0].checked) {
    document.bgColor = "purple";
  } else if (document.forms[0].cor[1].checked) {
    document.bgColor = "green";
  } else if (document.forms[0].cor[2].checked) {
    document.bgColor = "grey";
  } else if (document.forms[0].cor[3].checked) {
    document.bgColor = "lightblue";
  } else if (document.forms[0].cor[4].checked) {
    document.bgColor = "#4a4a63";
  } else {
    alert("escolher uma cor abaixo");
  }
}

function mudarCor2() {
  console.log(document.forms[0].cor.value);

  switch (document.forms[0].cor.value) {
    case "roxo":
      document.bgColor = "purple";
      break;

    case "verde":
      document.bgColor = "green";
      break;

    case "cinza":
      document.bgColor = "grey";
      break;

    case "azul":
      document.bgColor = "lightblue";
      break;

    case "chumbo":
      document.bgColor = "#4a4a63";
      break;

    default:
      alert("por favor escolher uma cor abaixo");
      break;
  }
}
