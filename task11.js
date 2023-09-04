
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.


function validatePIN(pin) {
    // Check if the PIN is either 4 or 6 digits
    if (pin.length === 4 || pin.length === 6) {
      // Check if all characters in the PIN are digits
      for (let i = 0; i < pin.length; i++) {
        if (isNaN(pin[i])) {
          return false; // If a non-digit character is found, return false
        }
      }
      return true; // If all characters are digits and length is 4 or 6, return true
    } else {
      return false; // If length is not 4 or 6, return false
    }
  }