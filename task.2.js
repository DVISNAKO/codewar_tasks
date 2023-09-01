//======================Задача

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

//======================Решение
function century(year) {
    // Divide the year by 100 and round up the result
    const centuryNumber = Math.ceil(year / 100);
    return centuryNumber;
  }

  