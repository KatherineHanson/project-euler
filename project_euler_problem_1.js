/* Problem 1: Multiples of 3 and 5

   If we list all the natural numbers below 10 that are multiples of 3 or 5,  
   we get 3, 5, 6 and 9. The sum of these multiples is 23.

   Find the sum of all the multiples of 3 or 5 below 1000. */

var find_multiples_of_three_and_five = function() {

  var numbers = 0;

  for (var i = 1000; i > 0; i--) {
    if(i%3 === 0){
      numbers+=i;
    }
    else if(i%5 === 0){
      numbers+=i;
    }
  }
  return numbers;
}

find_multiples_of_three_and_five();