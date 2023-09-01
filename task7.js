// Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

//=================

function evenOrOdd(number) {
    const num = number;
    
    if(num % 2){
      return 'Odd'
    } else {
      return "Even"
    }
  }