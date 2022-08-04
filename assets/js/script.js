// Assignment Code
var generateBtn = document.querySelector("#generate");

// find place for these.
var specialCharacters = " !#$%&'()*+,-./:;<=>?@\^_`{|}~".split("");
console.log(specialCharacters)
// 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.querySelector(".btn").addEventListener('click', promptMe);

function promptMe() {
    var buttonPrompt = prompt("Use special characters? Y/N");
    if (input === "y") {
      
    }
}