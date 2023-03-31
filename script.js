// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//setting variables for the haslengthRun so that I can test that to run thought the code
var haslengthRun = false;
var pwd = {};

//this tests whether or not the person went through the first questions and if they did it just shows a new random pwd
generateBtn.addEventListener("click", function () {
  if (!haslengthRun) {
    length();
    haslengthRun = true;
  }
  generateBtn.addEventListener("click", writePassword);
});

//these are all of the characters for the random pwd
pwd.UpperSpecialLower =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
pwd.LowerSpecial = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
pwd.UpperSpecial = "0123456789!@#$%^&*()_ABCDEFGHIJKLMNOPQRSTUVWXYZ+";
pwd.UpperLower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
pwd.Lower = "abcdefghijklmnopqrstuvwxyz";
pwd.Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
pwd.Special = "0123456789!@#$%^&*()_";

//this function asks the user how long they want the pwd to be
function length() {
  pwd.passwordLength = prompt(
    "Please enter the length of your password (between 8 and 128 characters):"
  );

  if (pwd.passwordLength >= 8 && pwd.passwordLength <= 128) {
    alert("Thank you!");

    special();
  } else {
    alert("Invalid input. Please enter a number between 8 and 128.");

    length();
  }
}

//this function asks the user if they want special characters
function special() {
  // alert if they want if they y or n store in pwd.special
  pwd.passwordSpecial = prompt(
    "Please enter 'y' for yes or 'n' for no if you want special characters:"
  );

  if (pwd.passwordSpecial !== "y" && pwd.passwordSpecial !== "n") {
    alert("That wasn't a 'y' or 'n' ");

    special();
  } else if (pwd.passwordSpecial === "y") {
    alert("Special characters coming right up!");

    letters();
  } else {
    alert("No special characters for you.");

    letters();
  }
}

//this function asks the user if they want letters
function letters() {
  // alert if they want if they y or n store in pwd.letters
  pwd.passwordLetters = prompt(
    "Please enter 'y' for yes or 'n' for no if you want letters:"
  );
  if (pwd.passwordLetters !== "y" && pwd.passwordLetters !== "n") {
    alert("That wasn't a 'y' or 'n' ");

    letters();
  } else if (pwd.passwordLetters === "n" && pwd.passwordSpecial === "n") {
    alert("Sorry we can't generate a password for you. Please try again.");

    length();
  } else {
    alert("Adding letters!");

    upper();
  }
}

//this function asks if they want uppercase letters
function upper() {
  // alert if they want if they y or n store in pwd.lower
  pwd.passwordUpper = prompt(
    "Please enter 'y' for yes or 'n' for no if you want upper case letters characters:"
  );

  if (pwd.passwordUpper !== "y" && pwd.passwordUpper !== "n") {
    alert("That wasn't a 'y' or 'n' ");

    upper();
  } else if (pwd.passwordUpper === "y") {
    alert("We will add upper case letters");

    lower();
  } else {
    alert("No upper case letters for you.");

    lower();
  }
}

//this function asks if they want lowercase letters
function lower() {
  // alert if they want if they y or n store in pwd.upper
  pwd.passwordLower = prompt(
    "Please enter 'y' for yes or 'n' for no if you want lower case letters:"
  );

  if (pwd.passwordLower !== "y" && pwd.passwordLower !== "n") {
    alert("That wasn't a 'y' or 'n' ");

    lower();
  } else if (pwd.passwordUpper === "n" && pwd.passwordLower === "n") {
    alert(
      "You picked 'n' to upper and lower case after saying 'y' to letters. Please choose whether or not you want letters."
    );

    letters();
  } else {
    alert("We will add lower case letters");

    generatePassword();
  }
}

//this is where the magic happens it check the parameters for length, special, lower, upper and generates a string of characters that matches your wishes
function generatePassword() {
  var password = "";

  // UpperSpecialLower

  if (
    pwd.passwordSpecial === "y" &&
    pwd.passwordLower === "y" &&
    pwd.passwordLetters === "y" &&
    pwd.passwordUpper === "y"
  ) {
    for (var i = 0; i < pwd.passwordLength; i++) {
      var randomIndex = Math.floor(
        Math.random() * pwd.UpperSpecialLower.length
      );
      password += pwd.UpperSpecialLower.charAt(randomIndex);
    }
  }

  // UpperLower
  else if (
    pwd.passwordSpecial === "n" &&
    pwd.passwordLower === "y" &&
    pwd.passwordLetters === "y" &&
    pwd.passwordUpper === "y"
  ) {
    for (var i = 0; i < pwd.passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * pwd.UpperLower.length);
      password += pwd.UpperLower.charAt(randomIndex);
    }
  }

  // UpperSpecial
  else if (
    pwd.passwordSpecial === "y" &&
    pwd.passwordLower === "n" &&
    pwd.passwordLetters === "y" &&
    pwd.passwordUpper === "y"
  ) {
    for (var i = 0; i < pwd.passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * pwd.UpperSpecial.length);
      password += pwd.UpperSpecial.charAt(randomIndex);
    }
  }

  //LowerSpecial
  else if (
    pwd.passwordSpecial === "y" &&
    pwd.passwordLower === "y" &&
    pwd.passwordLetters === "y" &&
    pwd.passwordUpper === "n"
  ) {
    for (var i = 0; i < pwd.passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * pwd.LowerSpecial.length);
      password += pwd.LowerSpecial.charAt(randomIndex);
    }
  }

  //Lower
  else if (
    pwd.passwordSpecial === "n" &&
    pwd.passwordLower === "y" &&
    pwd.passwordLetters === "y" &&
    pwd.passwordUpper === "n"
  ) {
    for (var i = 0; i < pwd.passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * pwd.Lower.length);
      password += pwd.Lower.charAt(randomIndex);
    }
  }

  //Special
  else if (pwd.passwordSpecial === "y" && pwd.passwordLetters === "n") {
    for (var i = 0; i < pwd.passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * pwd.Special.length);
      password += pwd.Special.charAt(randomIndex);
    }
  }

  //Upper
  else {
    for (var i = 0; i < pwd.passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * pwd.Upper.length);
      password = password + pwd.Upper.charAt(randomIndex);
    }
  }
  return password;
}
