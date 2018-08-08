var add = function(inputNumber1, inputNumber2) {
return inputNumber1 + inputNumber2;
};

var subtract = function(inputNumber1, inputNumber2) {
return inputNumber1 - inputNumber2;
};

var multiply = function(inputNumber1, inputNumber2) {
return inputNumber1 * inputNumber2;
};

var divide = function(inputNumber1, inputNumber2) {
return inputNumber1 / inputNumber2;
};

$(document).ready(function() {
  $("#cal").submit(function() {
  var inputNumber1 = parseFloat($("#number1").val());
  var inputNumber2 = parseFloat($("#number2").val());

$(".addresult").append(add(inputNumber1, inputNumber2));
$(".subtractresult").append(subtract(inputNumber1, inputNumber2));

event.preventDefault();

  // alert(add(inputAdd1, inputAdd2));
  // alert(subtract(inputAdd1, inputAdd2));
  // alert(multiply(inputAdd1, inputAdd2));
  // alert(divide(inputAdd1, inputAdd2));
  });
});



// $(".result").append.parseInt(inputAdd1 + inputAdd2());
// event.preventDefault();

// var add = function(number1, number2) {
// return number1 + number2;
// };

// var subtract = function(number1, number2) {
//    return number1 - number2;
// };
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
// var divide = function(number1, number2) {
// 	return number1 / number2;
// };
//
// var resultsAdd = add(number1, number2);
// var resultsSubtract = subtract(number1, number2);
// var resultsMultiply = multiply(number1, number2);
// var resultsDivide = divide(number1, number2);

// var height = parseFloat(prompt("what is your height?"));
// var weight = parseFloat(prompt("what is your weight"));
//
// var BMI = function(weight, height) {
//   return weight / (height * height);
// };
//
// var resultsBMI = BMI(weight, height);
//
// // alert(number1 + " and " + number2 + ' together is ' + resultsAdd + " " +
// //  resultsSubtract + " " + resultsMultiply + " " + resultsDivide);
// alert("your BMI is " + resultsBMI);
