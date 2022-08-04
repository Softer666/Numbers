function check() {
  var number = document.getElementById("box").value;

  if (number > 0)
    document.getElementById("result").innerHTML = "positive number";
  else if (number < 0)
    document.getElementById("result").innerHTML = "negative number";
  else if (number == 0) document.getElementById("result").innerHTML = "zero";
  else document.getElementById("result").innerHTML = "it's not a number";
}

function show() {
  var number1 = document.getElementById("box1").value;
  var number2 = document.getElementById("box2").value;
  var cont = "";

  for (i = number1; i <= number2; i++) {
    cont = cont + i + " ";
    document.getElementById("result2").innerHTML = cont;
  }
}
