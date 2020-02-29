//vamos criar uma janela de alerta para saldar os usuarios
alert("ola seja bem vindo");
/*
Vamos pedir ao usuario que digite o seu nome,e depois mostraremos em uma cAixa de alerta.
Para executar a operação iremos guardar o nome do usuario em uma vairiavel.
essa variavel tera um nome
*/
var nome = prompt("digite seu nome", "escreva seu nome aqui");
alert(nome);

document.getElementById("titulo").innerHTML = nome;
/*
Para apresentar o nome do usuario na pgina HTML foi necesario criar algum elemento de "link|relaçã"
Para esse vinculo usamos o comanto document.getElementById
   -Document refere-se ao body da pag HTML
   -gET(obter) Element (Elemento) By(por) Id(Identiicação)
   -inner(Inteiro,ou seja,dentro)HTML
Então pegamos um elemento que está no body por sue id e inserimos um conteudo em html,que neste caso é o nome do ususario
*/
