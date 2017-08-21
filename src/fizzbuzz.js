/**
 * Post-refactor:
 *  A number is Fizz if it is divisible by 3 or if it has a 3 in it
 *  A number is Buzz if it is divisible by 5 or if it has a 5 in it
 */

export default (max) => {
  var arr = [];
  for (var i = 0; i < max; i++) {
    arr[i] = i+1;
  }
  for (i = 0; i < max; i++) {
    var word = arr[i];
    if (arr[i] % 3 == 0) {
      word = "Fizz";
    }
    if (arr[i] % 5 == 0) {
      word = "Buzz";
    }
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      word = "FizzBuzz";
    }
    arr[i] = word;
  }

  return arr;
}
