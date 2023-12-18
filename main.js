var numero;
var resultado;
function insert(num){
     numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
  document.getElementById("resultado").innerHTML = " ";
}
function back(){
  numero = document.getElementById("resultado").innerHTML = numero.substring(0, numero.length - 1)
}
function calculo(){
  let resultado1 = document.getElementById('resultado').innerHTML;
  if(resultado1){
    document.getElementById('resultado').innerHTML = eval(resultado1)
  }
  else{
    document.getElementById('resultado').innerHTML = " "
  }

}