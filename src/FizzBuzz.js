function FizzBuzz() {

}

FizzBuzz.prototype.getNumbers = function() {
  var numbers = [];
  for (var i = 1; i < 100; i++) {
    numbers.push("");
  }
  return numbers;
};

module.exports.FizzBuzz = FizzBuzz;