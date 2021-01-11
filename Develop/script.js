// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k,", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArr = ["!", "#", "$", "%", "&", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "^", "_", "{", "|", "}", "~", "\u0022", "\u0027", "\u0028", "\u0029", "\u002f", "\u005b", "\u005c", "\u005d", "\u0060"];

var userArr = [];

// Write password to the #password input
function writePassword() {

  function generatePassword() {

    var passLength = prompt("Password length must be between 8-128 characters.");

    if (isNaN(passLength) || passLength < 8 || passLength > 128) {
      alert("Please select a proper length between 8-128 characters")
      return userPassword = "";
    } else {
  
      var lowerCase = confirm("Do you want lowercase letters?");
      var upperCase = confirm("Do you want uppercase letters?");
      var numeric = confirm("Do you want numbers?");
      var specialChar = confirm("Do you want special characters?");
  
      if (lowerCase) {
        userArr = userArr.concat(lowerCaseArr);
      }
  
      if (upperCase) {
        userArr = userArr.concat(upperCaseArr);
      }
  
      if (numeric) {
        userArr = userArr.concat(numericArr);
      }
  
      if (specialChar) {
        userArr = userArr.concat(specialCharArr);
      }
  
      if (lowerCase === false && upperCase === false && numeric === false && specialChar === false) {
        alert("Select a character type!");
        return userPassword = "";
      }
    }

    var userPassword = "";

    for(var i = 0; i < passLength; i++) {

      index = Math.floor(Math.random() * (userArr.length - 1))
      userPassword = userPassword + userArr[index];

    } 

    return userPassword;

    }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

