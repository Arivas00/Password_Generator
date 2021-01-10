// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var char = prompt("Password length must be between 8-128 characters.");
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numeric = confirm("Do you want numbers?");
  var specialChar = confirm("Do you want special characters?");
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
