// Assignment code here

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\',
  '/',  "'",  '!',  '#',
  '$',  '^',  '?',  ':',
  ',',  ')',  '(',  '}',
  '{', ']',  '[', '~',  
  '-',  '_',  '.',
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',  'b',  'c',  'd',
  'e',  'f',  'g',  'h',
  'i',  'j',  'k',  'l', 
  'm',  'n',  'o',  'p',
  'q',  'r',  's',  't',
  'u',  'v',  'w',  'x',
  'y',  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',  'B',  'C',  'D',
  'E', 'F',  'G',  'H',
  'I',  'J',  'K',  'L',
  'M',  'N',  'O',  'P',
  'Q',  'R',  'S',  'T',
  'U',  'V',  'W',  'X',
  'Y',  'Z',
];

var lengthOfPassword = parseInt(window.prompt('Password Length:'));

console.log(lengthOfPassword);
console.log(typeof lengthOfPassword);

var usersChosenCharacters = [];

while (lengthOfPassword < 8 || lengthOfPassword  > 128) {
  window.alert('Please enter a valid password length between 8 to 128 characters.')
  var lengthOfPassword = parseInt(window.prompt('Password Length:'));
}

var includeUpperCaseChars = confirm('Include uppercase characters?');
var includeLowerCaseChars = confirm('Include lowercase characters?');
var includeSpecialChars = confirm('Include special characters?');
var includeNumericChars = confirm('Include numeric characters?');
var result = [];

for(var i = 0; i < lengthOfPassword; i++) {
  console.log(result);

  var randomNum = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  var randomIndex = Math.floor(Math.random() * numericCharacters.length);
  // var randomNum = numericCharacters[randomIndex];
  result.push(randomNum);

  console.log(result);
}

for(var i = 0; i < lengthOfPassword; i++) {
  var randomIndex = console.log(result);

  var randomNum = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  var randomIndex = Math.floor(Math.random() * specialCharacters.length);
  var randomNum = specialCharacters[randomIndex];
  result.push(randomNum);

  console.log(result);
}

for(var i = 0; i < lengthOfPassword; i++) {
  var randomIndex = console.log(result);

  var randomNum = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  var randomIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
  var randomNum = lowerCasedCharacters[randomIndex];
  result.push(randomNum);

  console.log(result);
}

for(var i = 0; i < lengthOfPassword; i++) {
  var randomIndex = console.log(result);

  var randomNum = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  var randomIndex = Math.floor(Math.random() * upperCasedCharacters.length);
  var randomNum = upperCasedCharacters[randomIndex];
  result.push(randomNum);

  console.log(result);
}

console.log(result.join(''));


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// JavaScript added for functionality, please test at each step and leave comments if there are any issues

// Comments added for the first edits