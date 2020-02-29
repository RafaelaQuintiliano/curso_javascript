//Crição de duas var para a realização de calculos matematico
var n1;
var n2;
/*
Interagir com o usuario e perdir os valores para n1 e n2
*/
n1 = prompt("digite um valor", "");
n2 = prompt("digite outro valor", "");
n1 = parseInt(n1);
n2 = parseInt(n2);

soma = n1 + n2;
subtrair = n1 - n2;
multiplica = n1 * n2;
dividir = n1 / n2;
resto = n1 % n2;

//Vamos apresentar os resultados em tela de console

console.log(soma);
console.log(subtrair);
console.log(multiplica);
console.log(dividir);
console.log(resto);

/*
Para o java script realizar  operação aritmética de soma é necessario fazer a conversão das vairiaveis n1 e n2
para número,pois o retorno do Prompt é sempre como txt ,ou seja o comando Prompt tra o seu conteúdo como txt.
Faremos a conversão usando 
parSeInt(passe para inteiro)
*/
