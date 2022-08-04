function show() {
  var number1 = document.getElementById("box1").value;
  var number2 = document.getElementById("box2").value;
  var cont = "";

  for (i = number1; i <= number2; i++) {
    cont = cont + i + " ";
    document.getElementById("result2").innerHTML = cont;
  }
}
