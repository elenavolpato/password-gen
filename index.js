const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let buttonEl = document.getElementById("button-el")
let output1 = document.getElementById("output1")
let output2 = document.getElementById("output2")
let passwordLen = document.getElementById("length-el")

//genenerate new passwqords
function newPassword() {
    let password1 = ""
    let password2 = ""
    for (let i = 0; i <= passwordLen.value; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    output1.textContent = password1
    output2.textContent = password2
}
//buttons for length of password
function subtract() {
    passwordLen.value--
}
function add() {
    passwordLen.value++
}
//copy password to clipboard
function copyPassword(elementId) {
    let text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text)
        alert('Password copied to clipboard');
}
