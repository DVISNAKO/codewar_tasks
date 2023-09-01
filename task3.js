// ===================================Задача №3

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

// ===================================Решение
function squareSum(numbers) {
    let sum = 0;
  
    for (const number of numbers) {
      // Square each number and add it to the sum
      sum += number * number;
    }
  
    return sum;
  }