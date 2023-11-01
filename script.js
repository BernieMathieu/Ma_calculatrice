let display= document.getElementById("display")
let calculation =""
function appendValue(value) {
    calculation += value;
    display.value = calculation
  }
  
  function clearDisplay() {
    calculation = "";
    display.value = calculation
  }
  
  function deleteLastCharacter () {
    calculation = calculation.slice(0, -1)
    display.value = calculation;
  }
 
 function calculate () {
  try {
    let result = eval(calculation);
    display.value = result;
    calculation = result.toString();
  }
  catch (error){
    display.value = "Error";
    calculation = "";

  }
 }

//  document.addEventListener("keydown", function(eval)){
//   const key = eval.key;
//   if(/[0-9]/.test(key)){
//     appendValue(key)
//   }
//   else if (key === "+" || key === "*" || key === "-" || key === "/") {
//     appendValue(key);
//   }
//   else if (key === "Backspace"){
//     deleteLastCharacter();
//   }
//   else if (key === "Delete"){
//     clearDisplay();
//   }
//   else if (key === "Enter"){
//     calculate();
//   }
//  }
