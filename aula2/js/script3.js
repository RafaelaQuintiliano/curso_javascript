
var n1;
var n2;
var n3;

n1 = prompt("digite nome do produto", "");
n2 = prompt("digite valor", "");
n3 = prompt("digite percentual", "");

n2 = parseFloat(n2);
n3 = parseFloat(n3);

resultado = n2 * ((100 - n3) / 100);

console.log(n1);
console.log(resultado);
