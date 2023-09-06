// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = [];
  
    for (const char of text.toLowerCase()) {
      if (alphabet.includes(char)) {
        const position = alphabet.indexOf(char) + 1;
        result.push(position);
      }
    }
  
    return result.join(' ');
  }