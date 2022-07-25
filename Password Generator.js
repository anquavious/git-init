// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var length = prompt("What's the password length")
  if(length >=8 && length <=128) {
  var lowercase = confirm("Must include lowercase characters")
  var uppercase = confirm("Must include uppercase characters")
  var number = confirm("Must include number")
  var specialcharacters = ("Must include special character")
  } else {
    alert("Invalid Password")
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
