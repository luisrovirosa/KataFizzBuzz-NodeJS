function FizzBuzz() {

}

FizzBuzz.prototype.getNumbers = function() {
  var numbers = [];
  for (var i = 1; i < 100; i++) {
    numbers.push("");
  }
  numbers[0] = 1;
  numbers[1] = 2;
  return numbers;
};

module.exports.FizzBuzz = FizzBuzz;