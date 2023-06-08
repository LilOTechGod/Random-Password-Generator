// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");
var specialCharacters = ["~", "_", "-", "=", "+", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "10", "11", "12", "13", "14", "15"];
var possiblePassword = [];

// My code here, write generatepassword function
function generatePassword() {
let finalPassword = [];
var passwordLength = window.prompt("How many characters do you want your passwrd to be?" + "\nYou must choose between 8 to 128 characters.");

  if(passwordLength < 8) {
    window.alert("Your password must be more then 8 characters!");
    return;
  }else if(passwordLength > 128){
    window.alert("Your password must be less then 128 characters");
    return;
  }

  var specialChar = window.confirm("Do you want your password to include special characters?");
  var lowerChar = window.confirm("Do you want your password to include lower case characters?");
  var upperChar = window.confirm("Do you want your password to include upper case characters?");
  var numChar = window.confirm("Do you want your password to include numerical characters?");

  if(specialChar) {
    possiblePassword = possiblePassword.concat(specialCharacters);
    console.log(possiblePassword);
  }
  if(lowerChar) {
    possiblePassword = possiblePassword.concat(lowerCaseChar);
  }
  if(upperChar) {
    possiblePassword = possiblePassword.concat(upperCaseChar);
  }
  if(numChar) {
    possiblePassword = possiblePassword.concat(numericChar);
  }
  console.log(possiblePassword);

  for(let i = 0; i<passwordLength; i++) {
    finalPassword.push(possiblePassword[Math.floor(Math.random() * possiblePassword.length)])
  }
  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  window.alert("You'll know be asked a series of prompts for password criteria (:")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);