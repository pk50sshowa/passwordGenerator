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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var result = [];
var allChars = [];
var v = 0;

function generatePassword() {
  var lengthOfPassword = parseInt(window.prompt('Password Length:'));

  console.log(lengthOfPassword);
  console.log(typeof lengthOfPassword);
  
  while (lengthOfPassword < 8 || lengthOfPassword > 128) {
    window.alert('Please enter a valid password length between 8 to 128 characters.')
    var lengthOfPassword = parseInt(window.prompt('Password Length:'));
  }
  
  do {
  var includeUpperCasedChars = confirm('Include uppercase characters?');
  console.log(includeUpperCasedChars);
  if (includeUpperCasedChars === true) {
    allChars = allChars.concat(upperCasedCharacters);
    v++;
  }
  var includeLowerCasedChars = confirm('Include lowercase characters?');
  console.log(includeLowerCasedChars);
  if (includeLowerCasedChars === true) {
    allChars = allChars.concat(lowerCasedCharacters);
    v++;
  }
  var includeSpecialChars = confirm('Include special characters?');
  console.log(includeSpecialChars);
  if (includeSpecialChars === true) {
    allChars = allChars.concat(specialCharacters);
    v++;
  }
  var includeNumericChars = confirm('Include numeric characters?');
  console.log(includeNumericChars);
  if (includeNumericChars === true) {
    allChars = allChars.concat(numericCharacters);
    v++;
  }
  } while (v === 0)
  
  console.log(allChars);
  
  for(var i = 0; i < lengthOfPassword; i++) {
  
      var randomChar = allChars[Math.floor(Math.random() * allChars.length)];
      result.push(randomChar);
      
  }
  
  console.log(result);
  
  console.log(result.join(''));

  password = result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  document.getElementById("password").innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


