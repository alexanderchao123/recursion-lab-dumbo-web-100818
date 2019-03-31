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
  let result
  let firstChar = string.slice(0, 1)
  let lastChar = string.slice(-1)
  if (string.length === 1 || (string.length === 2 && firstChar === lastChar)) {
    result = true
  } else if (firstChar === lastChar) {
    result = isPalindrome(string.slice(1, -1))
  } else {
    result = false
  }
  return result
}

function addUpTo(array) {
  
}