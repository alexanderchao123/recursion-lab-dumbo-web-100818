// Code your solution here!
function printString(string) {
  console.log(string[0])
  if (string.length === 1) return true
  printString(string.slice(1))
}

function reverseString(string) {
  if (string.length === 1) return string
  return string.slice(-1) + reverseString(string.slice(0, -1))
}

function isPalindrome(string) {
  
}