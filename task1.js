// ===================================Задача №1

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// ===================================Решение
function findNextSquare(sq) {
  // Find the square root of the input number
  const sqrt = Math.sqrt(sq);

  // Check if the square root is an integer
  if (Number.isInteger(sqrt)) {
    // Increment the square root by 1 and return its square
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}
// =================================== Пояснение 

// Math.sqrt(sq) - Эта часть вычисляет квадратный корень из числа sq. Она используется для проверки, является ли число sq квадратом целого числа.

// Math.sqrt(sq) % 1 - Здесь Math.sqrt(sq) вычисляет квадратный корень, а оператор % выполняет деление и возвращает остаток. 
// Если остаток от деления квадратного корня на 1 равен нулю, это означает, что число является целым квадратным корнем.
//  Если остаток не равен нулю, это означает, что число не является целым квадратным корнем.

// ? -1 : Math.pow(Math.sqrt(sq) + 1, 2) - Это тернарный оператор, который проверяет результат выражения Math.sqrt(sq) % 1. 
// Если результат равен true (то есть остаток не равен нулю), он вернет -1, что означает, что число не является квадратом целого числа. 
// Если результат равен false (то есть остаток равен нулю), он выполнит вычисление Math.pow(Math.sqrt(sq) + 1, 2), что означает, что он возведет квадратный корень в число, 
// увеличит его на 1 и возведет результат в квадрат, чтобы получить следующий целый квадрат после числа sq.

// Таким образом, функция findNextSquare проверяет, является ли число sq квадратом целого числа. Если да, она возвращает следующий целый квадрат после sq, а если нет, она возвращает -1.