//below code stores variable named password
var password = document.getElementById("password");

//generate random password function
function genPassword() {
  //declares a variable chars, which is string containing all possible characters that can be used in the password
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passLength = 15; //length
  var password = ""; //initializes it as empty string where the generated password will be stored.

  //starts a for loop that execute 15 times (as set by passLength).
  //each iteration will add one randomly selected character to the password variable
  for (var i = 0; i < passLength; i++) {
    //randomNumber- generates random index, Math.random()- generates a random decimal between 0 and 1
    //multiplying by chars.length ensures the number is within the valid index range, Math.floor()- rounds the number down to the nearest integer
    var randomNumber = Math.floor(Math.random() * chars.length);

    //uses ".substring"- (start, end) to extract a single character from chars at the position randomNumber.
    //extracted character is then added to the password string.
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password; //updates with generated password
}

//to copy generated password to clipboard
function copyPassword() {
  var copyText = document.getElementById("password"); //stores a reference to it in the copyText variable
  copyText.select(); //selects the text inside the input field so it can be copied
  //executes the "copy" command to copy the selected text to the clipboard
  document.execCommand("copy");
}
//document.execCommand("copy")- is deprecated in modern browsers
