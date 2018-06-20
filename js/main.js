/*
 Nome:Rafael Ferreira Alves
   RA:31725243
*/

// QUESTÃO 1
function atualizaNome(){
  document.querySelector('h1').innerHTML = "Rafael Ferreira Alves";
  document.querySelector('title').innerHTML = "Rafael Ferreira Alves";
}


// QUESTÃO 2
function somando(){
  var numero1 = parseInt(document.getElementById("valor1").value);
  var numero2 = parseInt(document.getElementById("valor2").value);
  var result =  document.getElementById("resultado").value;
  result = numero1 + numero2;
  resultado.value = result;
  document.getElementById('valor1').style="border:3px solid #DDD";
  document.getElementById('valor2').style="border:3px solid #DDD";

  // QUESTÃO 3

//fiz com dois IF's para que o 0 como elemento neutro, premaneça inalterado.
  if(resultado.value > 0){
    document.getElementById('resultado').style.color = "#2E7D32";
  }
  if(resultado.value < 0){
    document.getElementById('resultado').style.color = "#C62828"; 
  }
// QUESTÃO 4
  if(valor1.value == ""){
    document.getElementById('valor1').style="border:2px solid #FF830F";
    alert('Digite um valor para o primeiro campo');
  }
  if(valor2.value == ""){
    document.getElementById('valor2').style="border:2px solid #FF830F";
    alert('Digite um valor para o segundo campo');
  }
  // QUESTÃO 1 DA LISTA
  if(valor1.value > valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor1.value +' é maior do que o '+valor2.value +'.');
  }
  if(valor1.value < valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor2.value +' é maior do que o '+valor1.value +'.');
  }
  if(valor1.value == valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor2.value +' é igual ao '+valor1.value +'.');
  }
}
function subtrai(){
  var numero1 = parseInt(document.getElementById("valor1").value);
  var numero2 = parseInt(document.getElementById("valor2").value);
  var result =  document.getElementById("resultado").value;
  result = numero1 - numero2;
  resultado.value = result;
  document.getElementById('valor1').style="border:3px solid #DDD";
  document.getElementById('valor2').style="border:3px solid #DDD";

  // QUESTÃO 3

//fiz com dois IF's para que o 0 como elemento neutro, premaneça inalterado.
  if(resultado.value > 0){
    document.getElementById('resultado').style.color = "#2E7D32";
  }
  if(resultado.value < 0){
    document.getElementById('resultado').style.color = "#C62828"; 
  }
// QUESTÃO 4
  if(valor1.value == ""){
    document.getElementById('valor1').style="border:2px solid #FF830F";
    alert('Digite um valor para o primeiro campo');
  }
  if(valor2.value == ""){
    document.getElementById('valor2').style="border:2px solid #FF830F";
    alert('Digite um valor para o segundo campo');
  }
  // QUESTÃO 1 DA LISTA
  if(valor1.value > valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor1.value +' é maior do que o '+valor2.value +'.');
  }
  if(valor1.value < valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor2.value +' é maior do que o '+valor1.value +'.');
  }
  if(valor1.value == valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor2.value +' é igual ao '+valor1.value +'.');
  }
}
function multiplica(){
  var numero1 = parseInt(document.getElementById("valor1").value);
  var numero2 = parseInt(document.getElementById("valor2").value);
  var result =  document.getElementById("resultado").value;
  result = numero1 * numero2;
  resultado.value = result;
  document.getElementById('valor1').style="border:3px solid #DDD";
  document.getElementById('valor2').style="border:3px solid #DDD";

  // QUESTÃO 3

//fiz com dois IF's para que o 0 como elemento neutro, premaneça inalterado.
  if(resultado.value > 0){
    document.getElementById('resultado').style.color = "#2E7D32";
}
  if(resultado.value < 0){
    document.getElementById('resultado').style.color = "#C62828"; 
}
// QUESTÃO 4
  if(valor1.value == ""){
    document.getElementById('valor1').style="border:2px solid #FF830F";
    alert('Digite um valor para o primeiro campo');
  }
  if(valor2.value == ""){
    document.getElementById('valor2').style="border:2px solid #FF830F";
    alert('Digite um valor para o segundo campo');
  }
  // QUESTÃO 1 DA LISTA
  if(valor1.value > valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor1.value +' é maior do que o '+valor2.value +'.');
  }
  if(valor1.value < valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor2.value +' é maior do que o '+valor1.value +'.');
  }
  if(valor1.value == valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor2.value +' é igual ao '+valor1.value +'.');
  }
}
function divide(){
  var numero1 = parseInt(document.getElementById("valor1").value);
  var numero2 = parseInt(document.getElementById("valor2").value);
  var result =  document.getElementById("resultado").value;
  result = numero1 / numero2;
  resultado.value = result;
  document.getElementById('valor1').style="border:3px solid #DDD";
  document.getElementById('valor2').style="border:3px solid #DDD";

  // QUESTÃO 3

//fiz com dois IF's para que o 0 como elemento neutro, premaneça inalterado.
  if(resultado.value > 0){
    document.getElementById('resultado').style.color = "#2E7D32";
}
  if(resultado.value < 0){
    document.getElementById('resultado').style.color = "#C62828"; 
}
// QUESTÃO 4
  if(valor1.value == ""){
    document.getElementById('valor1').style="border:2px solid #FF830F";
    alert('Digite um valor para o primeiro campo');
  }
  if(valor2.value == ""){
    document.getElementById('valor2').style="border:2px solid #FF830F";
    alert('Digite um valor para o segundo campo');
  }
// QUESTÃO 1 DA LISTA
  if(valor1.value > valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor1.value +' é maior do que o '+valor2.value +'.');
  }
  if(valor1.value < valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor2.value +' é maior do que o '+valor1.value +'.');
  }
  if(valor1.value == valor2.value && valor1.value != "" && valor2 != ""){
    alert('O '+ valor2.value +' é igual ao '+valor1.value +'.');
  }
}
// EXERCICIO 10 E TAMBEM O 3
function teste(){
  vetor = new Array (5);

  vetor [0] = parseFloat(prompt('Digite o primeiro valor'));
  vetor [1] = parseFloat(prompt('Digite o segundo valor'));
  vetor [2] = parseFloat(prompt('Digite o terceiro valor'));
  vetor [3] = parseFloat(prompt('Digite o quarto valor'));
  vetor [4] = parseFloat(prompt('Digite o quinto valor'));

  console.log(vetor[0]);

  var maior = vetor[0];
  for(var posicao = 1 ; posicao < vetor.length ; posicao++){
    if(vetor[posicao] > maior){
      maior = vetor[posicao];
    }
  }
  alert('O maior número é o '+ maior);
}
// EXERCICIO 4

function contar(){
  for(numero = 0; numero<=15; numero++)
  if(numero%2==0){
    alert('O número '+numero+' é par');
  }
  else{
    alert('O número '+numero+' é ímpar');
  }
}
