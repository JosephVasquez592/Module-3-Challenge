// Assignment Code
var generateBtn = document.querySelector("#generate");

// find place for these.
var specialCharacters = " !#$%&'()*+,-./:;<=>?@\^_`{|}~".split("");
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var selections = [];
var promptOne = "Use special characters? y/n";
var promptTwo = "Use letters? y/n";
var promptThree = "Use numbers? y/n";

// just to check if things work
console.log(specialCharacters);
console.log(letters);
console.log(numbers);
// console.log(selections);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.querySelector(".btn").addEventListener("click", promptMe);

function promptMe() {
    var buttonPrompt = prompt(promptOne);
    if () {
      selections = (specialCharacters); console.log(selections)
}}