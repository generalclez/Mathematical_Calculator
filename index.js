function display(value) {
  document.getElementById("result").value += value;
}
function clearScreen() {
  document.getElementById("result").value = "";
}
function calculate() {
  var first = document.getElementById("result").value;
  var final = eval(first);
  document.getElementById("result").value = final;
}
