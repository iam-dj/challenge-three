// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
    var password = generate();
    writePassword(password);
});
var pwd = {};

pwd.newPassword = "";

pwd.UpperSpecialLower =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
pwd.LowerSpecial = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
pwd.UpperSpecial = "0123456789!@#$%^&*()_ABCDEFGHIJKLMNOPQRSTUVWXYZ+";
pwd.UpperLower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
pwd.Lower = "abcdefghijklmnopqrstuvwxyz";
pwd.Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
pwd.Special = "0123456789!@#$%^&*()_";

length();

function length() {
  pwd.passwordLength = prompt(
    "Please enter the length of your password (between 21 and 42 characters):"
  );

  if (pwd.passwordLength >= 21 && pwd.passwordLength <= 42
  ) {
    alert("Thank you!");

    special();
  } else {
    alert("Invalid input. Please enter a number between 21 and 42.");

    length();
  }
}

function special() {
  // alert if they want if they y or n store in pwd.special
  pwd.passwordSpecial = prompt(
    "Please enter 'y' or 'n' if you want special characters:"
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

function letters() {
  // alert if they want if they y or n store in pwd.letters
  pwd.passwordLetters = prompt("Please enter 'y' or 'n' if you want letters:");
  if (pwd.passwordLetters !== "y" && pwd.passwordLetters !== "n") {
    alert("That wasn't a 'y' or 'n' ");

    letters();
  } else if 
  (pwd.passwordLetters === "n" && pwd.passwordSpecial === "n") {
    alert("Sorry we can't generate a password for you. Please try again.");

    length();
  } else {
    alert("Adding letters!");

    upper();
  }
}

function upper() {
  // alert if they want if they y or n store in pwd.lower
  pwd.passwordUpper = prompt(
    "Please enter 'y' or 'n' if you want upper case letters characters:"
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

function lower() {
  // alert if they want if they y or n store in pwd.upper
  pwd.passwordLower = prompt(
    "Please enter 'y' or 'n' if you want lower case letters:"
  );

  if (pwd.passwordLower !== "y" && pwd.passwordLower !== "n") {
    alert("That wasn't a 'y' or 'n' ");

    lower();
  } else if 
  (pwd.passwordUpper === "n" && pwd.passwordLower === "n") {
    alert("You picked 'n' to upper and lower case after saying 'y' to letters. Please choose whether or not you want letters.");

    letters();
  }
  else {
    alert("We will add lower case letters");

    generate();
  }
}

function generate() {
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
      password += pwd.Upper.charAt(randomIndex);
    }
  }
  return password;
}
